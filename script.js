function analizEt() {
    // 1. HTML'den kullanıcının yazdığı yazıyı alıyoruz
    const gelenYazi = document.getElementById("metinAlani").value;

    // 2. Harf Sayısını Bulma (Boşluklar dahil uzunluk)
    const harfSayisi = gelenYazi.length;

    // 3. Kelime Sayısını Bulma
    // trim(): Başındaki ve sonundaki gereksiz boşlukları siler.
    // split(/\s+/): Yazıyı boşluklara göre bölüp listeye (array) çevirir.
    // filter: Boş tırnakları saymasın diye temizlik yapar.
    const kelimeDizisi = gelenYazi.trim().split(/\s+/).filter(kelime => kelime.length > 0);
    const kelimeSayisi = kelimeDizisi.length;

    // 4. Sonuçları ekrana yazdırma
    document.getElementById("harfSayisi").innerText = harfSayisi;
    document.getElementById("kelimeSayisi").innerText = kelimeSayisi;
}