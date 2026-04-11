# Labour Pulse

Labour Pulse, ülke bazlı işgücü (ve benzeri makroekonomik) verilerini görselleştirmek için geliştirilmiş modern ve interaktif bir web uygulamasıdır. Kullanıcıların verileri çeşitli grafikler (Chart.js) yardımıyla kolayca incelemesine ve analiz etmesine olanak tanır.

## 🚀 Kullanılan Teknolojiler

Bu proje, yüksek performans ve modern standartlar gözetilerek aşağıdaki teknolojilerle inşa edilmiştir:

- **React (v19)** - Kullanıcı arayüzü kütüphanesi
- **TypeScript** - Statik tip denetimi ve güvenli kod yazımı
- **Vite** - Hızlı derleme ve geliştirme ortamı
- **Chart.js & React-Chartjs-2** - İnteraktif ve dinamik veri görselleştirmesi

## 📦 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla izleyin:

1. Proje dizinine gidin:
   ```bash
   cd labour-pulse
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Geliştirme sunucusunu (development server) başlatın:
   ```bash
   npm run dev
   ```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışmaya başlayacaktır.

## 🏗️ Proje Yapısı

- `src/components/`: Tekrar kullanılabilir UI bileşenleri (Şemalar, Chart listeleri vb.)
- `src/context/`: Ülke verilerinin global olarak yönetildiği React Context yapısı (`CountryDataProvider`)
- `src/layout/`: Ana sayfa düzenini oluşturan parçalar (Header, Footer, EditionBar vb.)
