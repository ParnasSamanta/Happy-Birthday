let e = document.querySelector(".countdown");
let p = document.querySelector("page0");
let starting_music = document.querySelector("#starting_music");
let counttime = 11;//11
const tick = () => {
    starting_music.play();
    const k = setInterval(() => {
        e.innerHTML = `<div>${counttime-1}</div>`;
        counttime--;
        if (counttime <= 0) {
            e.innerHTML = "<div>Let's Go!</div>";
        }
        if (counttime < 0) {
            clearInterval(k);
            window.scrollBy({
                behavior:"smooth",
                top: window.innerHeight
            });
            Run();
            setTimeout(function() {
                stopAnimation = true;
                c.style.visibility = "hidden";
                confetti.start();
                anim();
              }, 18045);
            setTimeout(function() {
                window.scrollBy({
                    behavior:"smooth",
                    top: window.innerHeight
                });
                Canvas.style.visibility = "hidden";

                confetti.stop();  
            },31447)
            enableScroll();
        }

    },900);
};
window.addEventListener('click',tick);