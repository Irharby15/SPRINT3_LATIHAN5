function Nilai(input) {
    var input = prompt("Masukan Nilai")
    switch (true) {
        case Nilai_anda >= 90:
            document.writeln("Masuk:" + "A" + "<br>" + "Selamat anda telah lulus");
            break;
        case Nilai_anda >= 80:
            document.writeln("Masuk:" + "B+" + "<br>" + "Selamat anda telah lulus");
            break;
        case Nilai_anda >= 70:
            document.writeln("Masuk:" + "B" + "<br>" + "Selamat anda telah lulus");
            break;
        default:
            document.writeln("Masuk:" + "F" + "<br>" + "Maaf anda tidak lulus")
    }
}
Nilai(90)