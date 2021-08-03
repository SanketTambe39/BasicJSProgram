function fnClick() {
    var flipResult = Math.random();
    if (flipResult < 0.5) {
        console.log("After fliping the coin we get ==> Head");
    } else {
        console.log("After fliping the coin we get ==> Tail");
    }
}

fnClick()