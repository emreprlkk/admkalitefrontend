// Bu dosya client tarafında çalışmalı. Next.js kullanıyorsan bu dosyayı dinamik import ile { ssr:false } al.
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Marker ikon path fix (bundler 404'lerini önler)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView({ stat }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // İstanbul merkezli
    mapRef.current = L.map(containerRef.current).setView([41.0082, 28.9784], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapRef.current);

    const title = stat?.title || stat?.statTitle || '';
    const locations = [
      { lat: 41.0082, lng: 28.9784, name: 'Merkez Lokasyon' },
      { lat: 41.0352, lng: 28.9869, name: 'Şube 1' },
      { lat: 40.9923, lng: 29.0243, name: 'Şube 2' },
      { lat: 41.0201, lng: 28.9447, name: 'Şube 3' },
    ];

    locations.forEach((loc) => {
      L.marker([loc.lat, loc.lng]).addTo(mapRef.current)
        .bindPopup(`<b>${loc.name}</b><br>${title} verisi`);
    });

    // Modal açılışlarında boyut düzeltmesi
    setTimeout(() => {
      if (mapRef.current) mapRef.current.invalidateSize();
    }, 150);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [stat]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[calc(100%-4rem)] rounded-xl border border-slate-300"
      style={{ minHeight: '300px' }}
    />
  );
}
