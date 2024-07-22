// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//     ease:"2",
// });

document.addEventListener("mousemove", function(hi){
    gsap.to(".crsr", {
        x:hi.x,
        y:hi.y,
        display:"flex",
    })
});

function aryav(){
    var wd = document.querySelector(".email");
    wd.addEventListener("mouseenter", function(){
        gsap.to(".email", {
            textDecoration:"underline",
            // fontWeight:"600"

        })
    });
    
    wd.addEventListener("mouseleave", function(){
        gsap.to(".email", {
            textDecoration:"none",
            // fontWeight:"400"
        })
    })
    


}
aryav();




var gsapp = gsap.timeline( {
    scrollTrigger: {
        trigger:".large"
    }
})
gsapp.from(".small", {
    y:"-500",
    duration:2,
})
gsapp.from(".large div", {
    delay:1,
    // y:"-600",
    opacity:0,
    duration:0.7,
    // ease:Power4
})
gsapp.from(".you div", {
    delay:1,
    // y:"-500",
    opacity:0,
    duration:1.5,
    // ease:Power4
})






gsap.from(".heading", {
    scrollTrigger: {
        trigger:".page2"
    },
    opacity:0,
    duration:2,
    ease:Power2,
})
gsap.from(".tleft", {
    scrollTrigger: {
        trigger:".tleft"
    },
    opacity:0,
    duration:3,
    ease:Power2
})
gsap.from(".left1", {
    scrollTrigger: {
        trigger:".left1"
    },
    opacity:0,
    duration:2,
    ease:Power2,
})
gsap.from(".right1", {
    scrollTrigger: {
        trigger:".right1"
    },
    opacity:0,
    duration:2,
    ease:Power2,
})
gsap.from(".bleft", {
    scrollTrigger: {
        trigger:".tleft"
    },
    opacity:0,
    duration:2,
    ease:Power2,
})
