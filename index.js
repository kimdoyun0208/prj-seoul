setTimeout(() => {
    document.getElementsByTagName("body")[0].setAttribute("data-scroll", "true");
} , 4200);

window.addEventListener('scroll', (e) => {
    if(document.getElementsByTagName("body")[0].getAttribute("data-scroll") == "false")
    {
        window.scrollTo(0, 0);
    }

    let windowScrollY = window.scrollY;

    let windowHeight = window.innerHeight;
    
    let currentPosition = (windowScrollY / windowHeight).toFixed(2);

    if(currentPosition >= 0.7)
    {
        document.getElementById("anim_1").style.animationName = "slide_from_left";
    }
    if(currentPosition >= 1.7)
    {
        document.getElementById("anim_2").style.animationName = "slide_from_right";
    }
    if(currentPosition >= 2.7)
    {
        document.getElementById("anim_3").style.animationName = "slide_from_left";
    }
    if(currentPosition >= 3.7)
    {
        document.getElementById("anim_4").style.animationName = "slide_from_right";
    }
});