function pesan(namaMenu) {

    const nomor = "6281253817234";

    const pesan =
        `Halo Tuku Dimsum! Saya ingin memesan ${namaMenu}.`;

    const url =
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}