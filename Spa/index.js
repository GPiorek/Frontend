document.addEventListener("DOMContentLoaded", function () {


    let openBtn = document.getElementById("popUpOpen");
    openBtn.onclick = function () {
        document.getElementById("popUpMain").style.display = "block";
    }

    let closeBtn = document.getElementById("popUpClose");
    closeBtn.onclick = function () {
        document.getElementById("popUpMain").style.display = "none";
    }

document.getElementById("popUpOfferMobile").onclick = function () {
    document.getElementById("popUpMain").style.display = "block";
}
});