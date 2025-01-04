document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        animation: gsap.from(".logo", {
            y: "30vh",
            scale: 3,
        })
    })


const offerPopUp = document.querySelector(".Offer")

offerPopUp.onclick = function () {
    console.log("OfferPopUp clicked");
}

});