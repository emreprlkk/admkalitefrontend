import _ from 'lodash';

export const formatKesintiVerisi = (veri) => {
  // 1️⃣ Ön kontrol
  if (
    !Array.isArray(veri) ||
    veri.length === 0 ||
    Object.entries(veri[0]).some(([_, val]) => val === null || val === undefined)
  ) {
    console.warn('Veri geçersiz: İlk objede null/undefined alan var.');
    return {};
  }

  const result = {};

  // 2️⃣ Enrich: tarihlerden -3 saat çıkar, ay/gün/isletme/etkiskoru hesapla
  const enriched = veri.map(k => {
    // Orijinal date objesi
    const origBas = k.baslamaTarihi instanceof Date 
      ? k.baslamaTarihi 
      : new Date(k.baslamaTarihi);
    const origBit = k.bitisTarihi instanceof Date 
      ? k.bitisTarihi 
      : new Date(k.bitisTarihi);

    // 3 saat = 3*3600*1000 ms geri al
    const baslama = new Date(origBas.getTime() - 3 * 3600 * 1000);
    const bitis   = new Date(origBit.getTime() - 3 * 3600 * 1000);

    const ay      = baslama.getMonth() + 1;
    const gun     = baslama.getDate();
    const isletme = k.isletme || 'BİLİNMEYEN';

    // Obje-bazlı saidi (etkiskoru)
    const dakika  = (bitis - baslama) / (1000 * 60);
    let objeSaidi = 0;
    if (
      k.sureyegore === 'Uzun' &&
      ['Şebeke işletmecisi','Dışsal'].includes(k.sebebegore) &&
      k.bildirimegore === 'Bildirimsiz'
    ) {
      objeSaidi = (dakika * Number(k.toplamabonesayisi)) / Number(k.isletmeabonecount);
    }
    objeSaidi = Math.round(objeSaidi * 100) / 100;

    return {
      ...k,
      baslama,           // düzeltilmiş Date
      bitis,             // düzeltilmiş Date
      ay,
      gun,
      isletme,
      etkiskoru: objeSaidi
    };
  });

  // 3️⃣ Gruplama: ay → işletme → gün
  const byAy = _.groupBy(enriched, 'ay');

  Object.entries(byAy).forEach(([ay, ayList]) => {
    result[ay] = {};
    const byIsletme = _.groupBy(ayList, 'isletme');

    Object.entries(byIsletme).forEach(([isletme, isletmeList]) => {
      result[ay][isletme] = {};
      const byGun = _.groupBy(isletmeList, 'gun');

      Object.entries(byGun).forEach(([gun, gunList]) => {
        // 4️⃣ Günlük toplam saidi
        const gunlukSaidi = Math.round(
          gunList.reduce((sum, it) => sum + it.etkiskoru, 0) * 100
        ) / 100;

        // 5️⃣ En yüksek 5 obje + RW ata
        const top5 = _.orderBy(gunList, 'etkiskoru', 'desc')
          .slice(0, 5)
          .map((item, idx) => ({
            OUTAGE_CODE: item.kesintikodu,
            SEBEKE_UNSURU: item.sebekeunsuru,
            OUTAGE_START: item.baslama.toISOString().slice(0, 19).replace('T', ' '),
            OUTAGE_END: item.bitis.toISOString().slice(0, 19).replace('T', ' '),
            kesintisüresidk: Math.round((item.bitis - item.baslama) / 60000 * 100) / 100,
            saidi_gunluk_isletme: (gunlukSaidi),
            saidi_kesinti_isletme: (item.etkiskoru),
            RW: (idx + 1)
          }));

        result[ay][isletme][gun] = top5;
      });
    });
  });

  return result;
};
