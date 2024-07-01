console.log("HELLO UNIVERSE");

function openAndCloseNav() {
    let responsiveNav = document.getElementById("responsive-nav");

    if (responsiveNav.style.height === "40vh") {
        console.log("Open");
        responsiveNav.style.height = "0vh";
    }

    else {
        console.log("Closed");
        responsiveNav.style.height = "40vh";
    }
}
