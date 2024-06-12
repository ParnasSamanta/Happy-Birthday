window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

const stopConfetti = () => {
    setTimeout (function() {
        confetti.stop();
    }, 8000);//interval for which confetti would fall
};

stopConfetti();

// const autoscroll = () => {
//         window.scrollBy({
//             behavior:"smooth",
//             top: window.innerHeight
//         });
// }
// function scrollCallback () {
//     for(let i=1; i<=7; i++){
//         setTimeout (function() {
//             autoscroll();
//         })
//     }
// }
// setInterval(autoscroll, 10000);//each slide showing time

// window.addEventListener("scroll", function(){
//     if(window.scrollY >= window.innerHeight){
//         //confetti.start(); //do something
//         stopConfetti();
//     }
// })

//Gsap Animation

gsap.from("#page2 .images",{
    scale:0,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#page2 .images",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#page3 .images",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 .images",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#page4 .images",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 .images",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#page5 .images",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page5 .images",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#page6 .images",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page6 .images",
        scroller:"body",
        start:"top 60%"
    }
})

//vedio playback

const vids = document.querySelectorAll("video");

let debounceTimeout;

window.onscroll = function () {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const musicPosition = 5*viewportHeight;
    if (scrollPosition > musicPosition && scrollPosition >= 6*viewportHeight) {
        ending_music.play();
    } else {
        ending_music.pause();
        ending_music.currentTime=0;
    }
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        

        vids.forEach((video, index) => {
            const videoPosition = (index + 2) * viewportHeight;

            if (scrollPosition >= videoPosition && scrollPosition < videoPosition + viewportHeight) {
                if (video.paused) {
                    video.play();
                }
                video.onended = function () {
                    window.scrollBy({
                        behavior: "smooth",
                        top: viewportHeight,
                    });
                };
            } else {
                if (!video.paused) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, 500); // Adjust the debounce delay as needed
};


// slider js
const slides = document.querySelectorAll(".slide");
var sliderCounter = 0;
slides.forEach ( 
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const transition = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${sliderCounter * 100}%)`
        }
    )
}

const slideShow = () => {
    if (sliderCounter >= slides.length) {
        sliderCounter = 0;
    }
    transition();
    sliderCounter++;
}
const start = setInterval(slideShow,3000);
while (window.onload) {
    start;
}
//slider js end

//last slider
let imgContainer = document.querySelector(".img-container");
setInterval(() => {
        let last = imgContainer.firstElementChild;
        last.remove();
        imgContainer.appendChild(last);
    }, 2500);
//last slier end

//last music
let ending_music = document.querySelector("#ending_music");


window.onload = function() {
    disableScroll();
}