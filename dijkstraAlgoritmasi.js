function dijkstra(graf, kaynakDugum) {
    // Kaynak dugumunden diger dugumlere mesafeleri sonsuz 
    // ve ziyaret edilmemis olarak ayarlandi
    const mesafeler = {};
    const ziyaretDurumlari = {};
    for (let dugum in graf) {
      mesafeler[dugum] = Infinity;
      ziyaretDurumlari[dugum] = false;
    }
    // Kaynak dugumun mesafesine sifir atandi
    mesafeler[kaynakDugum] = 0;
  
    // En kisa mesafeyi bulmak icin karsilastirmalar yapildi
    for (let i = 0; i < Object.keys(graf).length - 1; i++) {
      // En kisa mesafeli dugum secildi
      let seciliDugum = null;
      let enKisaMesafe = Infinity;
      for (let dugum in graf) {
        if (!ziyaretDurumlari[dugum] && mesafeler[dugum] < enKisaMesafe) {
          seciliDugum = dugum;
          enKisaMesafe = mesafeler[dugum];
        }
      }
  
      // Secilen ve en kisa mesafesi belirlenen dugumun ziyaret edildigi belirtildi 
      ziyaretDurumlari[seciliDugum] = true;
  
      // Secilen dugumun komsu dugumlere olan mesafeleri guncellendi
      for (let komsuDugum in graf[seciliDugum]) {
        let mesafe = graf[seciliDugum][komsuDugum];
        if (!ziyaretDurumlari[komsuDugum] && mesafeler[seciliDugum] + mesafe < mesafeler[komsuDugum]) {
          mesafeler[komsuDugum] = mesafeler[seciliDugum] + mesafe;
        }
      }
    }
    return mesafeler;
  }

  