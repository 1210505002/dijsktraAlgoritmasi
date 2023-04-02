# Dijkstra Algoritması

https://1210505002.github.io/dijsktraAlgoritmasi/
[link name](targetURL)

### Algoritmanın Amacı ve Kullanım Alanları

Pozitif ağırlıklı grafiklerde kaynak düğümle diğer düğümler arasındaki en kısa mesafeli/hafif yolu bulmak için kullanılan graf algoritmasıdır. İki şehir arasındaki en kısa rota, telefon şebekesinde bant genişliği, ağlar ve dosya sunucusu atama gibi alanlarda kullanılır.

### Algoritmanın Çalışma Şekli

 <img src="https://github.com/1210505002/dijsktraAlgoritmasi/blob/main/resimler/dijkstra%20(2).jpg" height="70" width="70" >

Adım 1: Mesafeler kenar uzunlukları kullanılarak hesaplanır. Kaynak düğümüne mesafe sıfır olarak atanır, diğer düğümlere mesafe sonsuz olarak atanır.

  <img src="./resimler/dijkstra%20(3).jpg" height="70" width="70" >

Adım 2: Kaynak düğümüne komşu olan düğümlerden başlanarak bu düğümlere olan mesafeler hesaplanır ve sonsuzdan küçük olduklarından mesafe güncellenir. Güncellenen düğümler arasından en kısa mesafeye sahip olanı seçilir, ebeveyni (hangi düğümden ulaşıldığı) belirtilir ve ziyaret edilir.

  <img src="https://github.com/1210505002/ksOdev1Soru4/resimler/dijkstra%20(4).jpg" height="70" width="70" >

Adım 3: Ziyaret edilen düğüme ebeveyni dışında komşu olan düğümlere mesafeleri hesaplanır ve güncellenir. En kısa mesafeye sahip olanı seçilir, ebeveyni (hangi düğümden ulaşıldığı) belirtilir ve ziyaret edilir.

  <img src="https://github.com/1210505002/ksOdev1Soru4/resimler/dijkstra%20(5).jpg" height="70" width="70" >

Adım 4: Adım 3'teki işlemler tekrar edilir.

  <img src="https://github.com/1210505002/ksOdev1Soru4/resimler/dijkstra%20(6).jpg" height="70" width="70" >

Adım 5: Mesafeler kenar uzunlukları kullanılarak hesaplanır. Kaynak düğümüne mesafe sıfır olarak atanır, diğer düğümlere mesafe sonsuz olarak atanır.

  <img src="https://github.com/1210505002/ksOdev1Soru4/resimler/dijkstra%20(7).jpg" height="70" width="70" >

Adım 6: Artık tüm düğümler ziyaret edildiğinde kaynak düğümünden diğer düğümlere olan en kısa yol mesafesi bulunmuş olur.

### Algoritmanın Çalışma Zamanı Analizi

#### En İyi Durum:

Kaynak düğümü ile hedef düğümü arasında doğrudan bir kenarın olduğu,grafın
çok az kenara sahip olduğu durumdur. Her bir düğüme yalnızca bir kez bakılır
ve her kenar yalnızca bir kez taranır. V düğüm sayısı, E kenar sayısı olmak
üzere algoritmanın zaman karmaşıklığı O(V+E) olur.

#### En Kötü Durum:

Dijkstra algoritmasının kötü durum zaman karmaşıklığı, kullanılan implementasyon
türüne bağlıdır. V düğümlerin sayısını, E kenarların sayısını temsil etmektedir.
`Düz bir dizi (Linear)` kullanılarak uygulandığında, her bir öğeyi öncelik kuyruğuna eklemek
için V kez döngü yapılır. Her bir döngüde o anki ağırlıklı kenarın en düşük
olduğunu kontrol etmek için tüm öğeleri tarar ve tekrardan V kez döngü yapılır.
Çalışma zamanı O(V^2) olur. `Min-İkili Yığını` kullanarak her düğüm için en düşük
ağırlıklı kenar hesaplarken tüm kenarlar yalnızca bir kez taranacağından E, her
bir düğüm yalnızca bir kez öncelik kuyruğuna ekleneceğinden V olur ve öncelik
kuyruğundaki en üstteki düğümde yer alır. Bu nedenle, öncelik kuyruğuna öğe eklemek
ve kaldırmak yalnızca O(logV) zaman alacağından zaman karmaşıklığını O((V+E)logV)'dir.
`Fibonacci Yığını` kullanarak yapılan bir implementasyon, her bir öğe kuyruğa eklenirken ve kuyruktan çıkarılırken O(logV) zamanı harcanır. Tüm kenarların taranması için O(E), kuyruğun güncellenmesi için gerekli olan tüm işlemler O(logV) zamanı harcanır. Tüm bu işlemlerin
zaman karmaşıklığı O((V+E)logV) olur.

#### Ortalama Durum:

Dijkstra algoritmasının en iyi ve en kötü durum arasındaki bir durumdur. düğümlerin ve kenarların ağırlıkları rastgele seçilir. En küçük uzaklık değerine sahip düğümün seçimi ve güncellenmesi için O(logV) ve her düğüm ziyaret edildiğinden O(E)'dir. Ortalama çalışma zamanı O(ElogV) olur.
