var listDesa = ['argodadi,sedayu', 'argomulyo,sedayu', 'argorejo,sedayu', 'argosari', 'bangunjiwo,kasihan', 'banguntapan,banguntapan', 'bantul,bantul', 'baturetno,banguntapan', 'bawuran,pleret', 'canden,jetis', 'caturharjo,pandak', 'cetan srigandi']
for (var y = 1; y <= 12; y++) {
    if (y == 1) {
        console.log(y + "argodadi,sedayu")
    } else if (y % 2 == 0) {
        document.write(y, "argomulyo,sedayu")
    } else if (y % 3 == 0) {
        document.write(y, "argorejo,sedayu")
    } else if (y % 4 == 0) {
        document.write(y, "argosari")
    } else if (y % 5 == 0) {
        document.write(y, "bangunjiwo,kasihan")
    } else if (y % 6 == 0) {
        document.write(y, "banguntapan,banguntapan")
    } else if (y % 7 == 0) {
        document.write(y, "bantul,bantul")
    } else if (y % 8 == 0) {
        document.write(y, "baturetno,banguntapan")
    } else if (y % 9 == 0) {
        document.write(y, "bawuran,pleret")
    } else if (y % 10 == 0) {
        document.write(y, "caden,jetis")
    } else if (y % 11 == 0) {
        document.write(y, "caturharjo,pandak")
    } else {
        console.log(y, "cetan srigandi")
    }
}