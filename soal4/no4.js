for (var y = 1; y <= 10; y++) {
    for (var x = 1; x <= 10; x++) {
        if (y == x || x == 10 - (y - 1) || y == 5 || x == 5) {
            document.writeln(y)
        } else {
            document.write("_")
        }
    }
    document.writeln("</br>")
}