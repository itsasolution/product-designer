// moving cursor
let crs = document.getElementById("circle");

document.addEventListener("mousemove", function (details) {

    //(detail object.Client) mouse position details and we set that cirlce in that position

    crs.style.transform = `translate(${details.x}px , ${details.y}px )`
    // crs.style.left = details.clientX + 'px'; 
    // crs.style.top = details.clientY + 'px'; 

});




function animaton() {
    // from this to their original poses
    gsap.from("#nav", {
        y: '-20px',
        opacity: 0,
        duration: 1.5,
        delay: .9,
        ease: Expo.easeInOut,

    });

    gsap.from("#ani", {
        opacity: 0,
        duration: 1,
        ease: Power1,
        delay: 1.8
    })
}



// it selects all the card class ele and store in nodelist(like array) [d d d]
let cards = document.querySelectorAll(".card")

// loop through each ele one by one card = current card
cards.forEach(function (card) {

    let rotate = 0
    let rotdiff = 0
    // when move mouse on that card do
    card.addEventListener("mousemove", function (dtl) {

        let diff = dtl.clientY - card.getBoundingClientRect().top;

        // card.getbourcet is give all pos of card
        console.log(diff);

        rotdiff = dtl.clientX - rotate; //100-100 = stable
        rotate = dtl.clientX;      // 50-100 = -50 rotate

        // gsap.(".class")
        gsap.to(card.querySelector("img"), {
            opacity: 1,
            top: diff,
            left: dtl.clientX - 100,
            ease: Power2, // smoothness of ani pow1- pow6
            rotate: gsap.utils.clamp(-13, 13, rotdiff), // util min val - max value 50=15
            duration: 0.2,
        });

        // cursor
        cursorMove();

    });

    card.addEventListener("mouseleave", function (dtl) {
        gsap.to(card.querySelector("img"), {
            opacity: 0,
            delay: 0,
        });

        // cursor
        cursorLeave();
    });


});

function cursorMove() {
    crs.style.height = "40px";
    crs.style.width = "40px";
    crs.style.background = "rgba(231, 230, 230, 0.300)"
    // crs.style.filter = "blur(1px)"
    crs.textContent = "Astro"
    crs.style.top = "-35px";
    crs.style.left = "-20px";
    crs.style.boxShadow = "none";

}
function cursorLeave() {
    crs.style.height = "10px";
    crs.style.width = "10px";
    crs.style.background = "#fff"
    crs.textContent = ""
    crs.style.top = "-5px";
    crs.style.left = "-5px";
    crs.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff,0 0 20px #fff";

}

let curList = document.querySelectorAll("#cur");
curList.forEach(ele => {
    ele.addEventListener("mousemove", cursorMove);
    ele.addEventListener("mouseleave", cursorLeave);
});


// locomotive is library for smooth scrolling copy git hub link
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});


animaton()

// script for stop/start rotation
animatList = document.querySelectorAll(".animat");

document.querySelector(".d1").addEventListener("click", () => {
    
    animatList.forEach(box => {
        box.classList.toggle("remove-animation");
    })
});
