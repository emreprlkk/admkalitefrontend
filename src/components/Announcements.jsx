// Announcements.jsx
import React from 'react';
import {
  Badge, IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar,
  Typography, Chip, Stack, Box, Divider, Tooltip, CircularProgress
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const fallback = [
  { id:'v1.3.0', title:'SAİDİ SAİFİ VERİLERİ', body:'TABLO 1 VERİLERİNE GÖRE GÜNCELLENDİ', date:'2025-08-01T13:00:00Z', tag:'Veri Güncelleme', icon:'🌙' },
  { id:'v1.2.2', title:'ODE VERİLERİ SİTEYE EKLENDİ', body:'2024 VE 2025 ODE VERİLERİ', date:'2025-08-02T14:30:00Z', tag:'Yeni Eklenti', icon:'🛠️' },
//  { id:'v1.2.0', title:'Bildirim Rozeti', body:'Okunmamışlar sayılıyor.', date:'2025-07-20T08:00:00Z', tag:'Geliştirme', icon:'🔔' },
];

function timeAgoTR(iso){
  const rtf = new Intl.RelativeTimeFormat('tr', { numeric: 'auto' });
  const now = Date.now();
  const t = new Date(iso).getTime();
  const diffSec = Math.round((t - now) / 1000);
  const abs = Math.abs(diffSec);
  const units = [
    ['year', 60*60*24*365],
    ['month', 60*60*24*30],
    ['week', 60*60*24*7],
    ['day', 60*60*24],
    ['hour', 60*60],
    ['minute', 60],
    ['second', 1],
  ];
  for (const [unit, s] of units){
    if (abs >= s || unit === 'second'){
      const value = Math.round(diffSec / s);
      return rtf.format(value, unit);
    }
  }
  return '';
}

export default function Announcements({
  siteKey,
  src,
  items,
  mode = 'dialog',         // 'dialog' | 'drawer' | 'inline'
  anchor = 'right',        // drawer yönü
  buttonVariant = 'icon',  // 'icon' | 'text'
  title = 'Duyurular',
  onOpenChange
}){
  const storageKey = React.useMemo(
    () => `duyuru:v1:${siteKey || (typeof window !== 'undefined' ? location.host : 'default')}:seen`,
    [siteKey]
  );
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [seen, setSeen] = React.useState(()=> {
    if (typeof window === 'undefined') return new Set();
    try { return new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')); }
    catch { return new Set(); }
  });

  const unseenCount = React.useMemo(
    () => data.reduce((n, it) => n + (seen.has(it.id) ? 0 : 1), 0),
    [data, seen]
  );

  const persistSeen = React.useCallback((next) => {
    setSeen(new Set(next));
    if (typeof window !== 'undefined'){
      localStorage.setItem(storageKey, JSON.stringify([...next]));
    }
  }, [storageKey]);

  const markAllRead = React.useCallback(() => {
    const next = new Set(seen);
    data.forEach(d => next.add(d.id));
    persistSeen(next);
  }, [data, seen, persistSeen]);

  const markOne = React.useCallback((id) => {
    const next = new Set(seen); next.add(id); persistSeen(next);
  }, [seen, persistSeen]);

  const toggleOpen = React.useCallback((v) => {
    const next = v !== undefined ? v : !open;
    setOpen(next);
    onOpenChange && onOpenChange(next);
    if (next) markAllRead(); // açınca hepsini okundu say; istersen kaldır
  }, [open, onOpenChange, markAllRead]);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try{
        let arr = [];
        if (items && items.length) {
          arr = items;
        } else if (src) {
          const res = await fetch(src, { cache: 'no-store' });
          if (!res.ok) throw new Error('HTTP '+res.status);
          arr = await res.json();
        } else {
          arr = fallback;
        }
        arr = arr.map(x => ({
          id: String(x.id ?? x.title),
          title: String(x.title ?? 'Duyuru'),
          body: x.body || '',
          date: x.date ? new Date(x.date).toISOString() : new Date().toISOString(),
          tag: x.tag,
          icon: x.icon,
          href: x.href
        })).sort((a,b)=> new Date(b.date) - new Date(a.date)).reverse();
        if (!cancelled) setData(arr);
      }catch(e){
        console.error('Duyuru yükleme hatası:', e);
        if (!cancelled) setData(fallback);
      }finally{
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [src, items]);

  const Trigger = (
    buttonVariant === 'icon' ? (
      <Tooltip title="Duyurular">
        <IconButton onClick={() => toggleOpen(true)} aria-label="Duyurular">
          <Badge color="error" badgeContent={unseenCount} max={99}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    ) : (
      <Button onClick={() => toggleOpen(true)} startIcon={<NotificationsIcon />}>
        Duyurular
        {unseenCount > 0 && (
          <Box component="span" style={{ marginLeft: 8, padding: '2px 6px', borderRadius: 6, background: 'var(--mui-palette-error-main)', color: 'white', fontSize: 12 }}>
            {unseenCount}
          </Box>
        )}
      </Button>
    )
  );

  const ListView = (
    <List sx={{ width: '100%', py: 0 }}>
      {data.map((it, idx) => (
        <Box key={it.id}>
          <ListItem
            alignItems="flex-start"
            sx={{
              opacity: seen.has(it.id) ? 0.85 : 1,
              bgcolor: seen.has(it.id) ? 'transparent' : 'action.hover',
              borderRadius: 1
            }}
            secondaryAction={it.tag ? <Chip size="small" label={it.tag} /> : null}
          >
            <ListItemAvatar>
              <Avatar sx={{ fontWeight: 700 }}>
                {it.icon ? it.icon : it.title.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
                  {it.href ? (
                    <Typography component="a" href={it.href} target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 700, textDecoration: 'none' }}>
                      {it.title}
                    </Typography>
                  ) : (
                    <Typography sx={{ fontWeight: 700 }}>{it.title}</Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">· {timeAgoTR(it.date)}</Typography>
                </Stack>
              }
              secondary={it.body && (
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace:'pre-line', mt: .5 }}>
                  {it.body}
                </Typography>
              )}
              onClick={() => markOne(it.id)}
            />
          </ListItem>
          {idx < data.length - 1 && <Divider component="li" sx={{ my: 1 }} />}
        </Box>
      ))}
      {loading && (
        <Stack alignItems="center" py={3}><CircularProgress size={24} /></Stack>
      )}
      {!loading && data.length === 0 && (
        <Box p={2}><Typography color="text.secondary">Şimdilik duyuru yok.</Typography></Box>
      )}
    </List>
  );

  if (mode === 'inline') {
    return (
      <Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h6">{title}</Typography>
          <Stack direction="row" gap={1}>
            <Button size="small" onClick={markAllRead} disabled={unseenCount===0}>Tümünü okundu say</Button>
            {Trigger}
          </Stack>
        </Stack>
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 1 }}>
          {ListView}
        </Box>
      </Box>
    );
  }

  return (
    <>
      {Trigger}
      {mode === 'dialog' ? (
        <Dialog open={open} onClose={() => toggleOpen(false)} fullWidth maxWidth="sm" aria-labelledby="duyurular-title">
          <DialogTitle id="duyurular-title">
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">{title}</Typography>
              <Stack direction="row" gap={1}>
                <Button size="small" onClick={markAllRead} disabled={unseenCount===0}>Tümünü okundu say</Button>
                <Button size="small" onClick={() => toggleOpen(false)}>Kapat</Button>
              </Stack>
            </Stack>
          </DialogTitle>
          <DialogContent dividers>
            {ListView}
          </DialogContent>
          <DialogActions sx={{ display:'none' }} />
        </Dialog>
      ) : (
        <Drawer anchor={anchor} open={open} onClose={() => toggleOpen(false)} PaperProps={{ sx:{ width: { xs:'100%', sm: 420 } } }}>
          <Box role="presentation" sx={{ p: 2, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Typography variant="h6">{title}</Typography>
            <Stack direction="row" gap={1}>
              <Button size="small" onClick={markAllRead} disabled={unseenCount===0}>Tümünü okundu say</Button>
              <Button size="small" onClick={() => toggleOpen(false)}>Kapat</Button>
            </Stack>
          </Box>
          <Divider />
          <Box sx={{ p: 1 }}>
            {ListView}
          </Box>
        </Drawer>
      )}
    </>
  );
}
