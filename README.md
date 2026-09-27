# Dapoer Kuliner — Landing Page

Landing page React (Vite) untuk Dapoer Kuliner, sesuai revisi:
- Semua ikon dekoratif (petik 3, bunga, daun, topi koki di background) dihapus — tampilan bersih.
- Background full putih (tidak cream).
- Foto paket catering sudah "masuk" ke dalam kotak (object-fit: cover + overflow hidden).
- Copy teks dipersingkat di semua section.
- Splash screen saat pertama kali dibuka.
- 5 foto hero: mengumpul jadi 1 → menyebar otomatis dengan animasi smooth (cubic-bezier), lalu "turun" mengikuti scroll ke section Tentang Kami (bukan teleport).

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Build untuk produksi:

```bash
npm run build
```

## Struktur folder

```
src/
  components/
    SplashScreen.jsx    // splash screen pembuka
    Navbar.jsx
    Hero.jsx             // headline + area kosong utk foto (diisi PhotoCluster)
    About.jsx            // tentang kami + area kosong utk foto
    PhotoCluster.jsx      // 5 foto: gather->spread + turun saat scroll
    WhyUs.jsx             // kenapa memilih kami
    Packages.jsx          // 3 paket catering
    FAQ.jsx               // accordion FAQ
    Footer.jsx
  data/
    photos.js              // sumber gambar (GANTI dengan foto asli)
  App.jsx
  main.jsx
  index.css               // design tokens (warna, font, spacing)
```

## Mengganti foto

Foto di `src/data/photos.js` masih memakai foto contoh dari Unsplash agar
layout & animasi bisa langsung dicoba. Ganti `src` masing-masing dengan foto
asli Dapoer Kuliner:

- Taruh file gambar di `src/assets/`, lalu `import foto1 from '../assets/foto1.jpg'`
  dan pakai sebagai `src`, **atau**
- Taruh di `public/images/`, lalu pakai path `/images/nama-file.jpg`.

Foto paket catering (di `Packages.jsx`) dan foto splash memakai gambar
terpisah, cari komentar `image:` di file tersebut.

## Cara kerja animasi foto hero

`PhotoCluster.jsx` adalah satu komponen yang membentang di atas section
**Hero** dan **Tentang Kami** sekaligus (lihat `hero-about-wrap` di
`App.jsx`). Posisi tiap foto dihitung dari 2 data layout (`heroLayout` dan
`aboutLayout`, satuan px) yang di-interpolasi (lerp) berdasarkan:

1. `introProgress` — 0 → 1 sesaat setelah splash screen selesai, membuat
   foto mengumpul di tengah lalu menyebar ke posisi hero (durasi ~1.1 detik,
   easing `cubic-bezier(0.16, 1, 0.3, 1)`).
2. `scrollYProgress` (dari `useScroll` framer-motion, terikat ke tinggi
   wrapper Hero+About) — mengatur posisi foto berpindah halus dari layout
   hero ke layout about saat halaman di-scroll (bukan lompat/teleport).

Untuk menyesuaikan posisi/ukuran/rotasi tiap foto, ubah angka di
`heroLayout` dan `aboutLayout` pada `PhotoCluster.jsx`.

Di layar kecil (< 900px), animasi ini disembunyikan dan diganti grid foto
statis biasa (di `Hero.jsx` dan `About.jsx`) demi performa & kenyamanan di
mobile.

## Kustomisasi warna & font

Semua token desain ada di `src/index.css` (`:root { ... }`) — warna utama,
warna aksen, font (Baloo 2 untuk judul, Plus Jakarta Sans untuk body), dan
kurva easing animasi (`--ease-smooth`).
