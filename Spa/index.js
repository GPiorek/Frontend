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

    let popUpMainGallery = document.getElementById("popUpMainGallery");
    let openBtnGallery = document.getElementById("popUpOpenGallery");
    openBtnGallery.onclick = function () {
        document.getElementById("popUpMainGallery").style.display = "block";
    }

    let closeBtnGallery = document.getElementById("popUpCloseGallery");
    closeBtnGallery.onclick = function () {
        document.getElementById("popUpMainGallery").style.display = "none";
    }

    let popUpMainContact = document.getElementById("popUpMainContact");
    let openBtnContact = document.getElementById("popUpOpenContact");
    openBtnContact.onclick = function () {
        document.getElementById("popUpMainContact").style.display = "block";
    }

    let closeBtnContact = document.getElementById("popUpCloseContact");
    closeBtnContact.onclick = function () {
        document.getElementById("popUpMainContact").style.display = "none";
    }

    let homeBtn = document.getElementById("Home")
    homeBtn.onclick = function () {
        window.location.reload()
    }


});