document.addEventListener("mousemove", function (dets) {

    document.querySelector("#cursor").style.left = dets.x + "px";
    document.querySelector("#cursor-blur").style.left = dets.x - 125 + "px";
    document.querySelector("#cursor").style.top = dets.y + "px";
    document.querySelector("#cursor-blur").style.top = dets.y - 125 + "px";

    console.log(dets)
})


var crsr = document.querySelector("#cursor");

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {

        crsr.style.border = "1px solid #fff";
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent";

    })

    elem.addEventListener("mouseleave", function () {

        crsr.style.border = " 1px solid  #95C11E";
        crsr.style.scale = 1
        crsr.style.backgroundColor = " #95C11E";

    })


})


// footer script //


var footer = document.querySelectorAll("#footer h3  , #footer h4 , #footer img  , #footer i  ");

footer.forEach(function (elem) {

    // console.log(elem) ;

    elem.addEventListener("mouseenter", function () {

        crsr.style.border = "1px solid #fff";
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent";
        elem.style.color = "white";
    })


    elem.addEventListener("mouseleave", function () {

        crsr.style.border = " 1px solid  #95C11E";
        crsr.style.scale = 1
        crsr.style.backgroundColor = " #95C11E";
        elem.style.color = "#000";
    })


})


var arrow = document.querySelector
    ("#arrow");

// console.log(arrow)

arrow.addEventListener("mouseenter", function () {

    crsr.style.border = "0.5px solid #fff";
    crsr.style.scale = 6
    crsr.style.backgroundColor = "transparent";


})

arrow.addEventListener("mouseleave", function () {

    crsr.style.border = " 1px solid  #95C11E";
    crsr.style.scale = 1
    crsr.style.backgroundColor = " #95C11E";

})




gsap.to("#nav", {

    backgroundColor: "black",
    height: "165px",
    delay: 0.5,

    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true ,
        start: "top -10px",
        scrub: true
    }
})

gsap.to("#main", {

    backgroundColor: "black",

    scrollTrigger: {

        trigger: "#main",
        scroller: "body",

        scrub: 2,
        start: "top -20%",

        end: "top -70%",





    }



})


gsap.from("#page2-part2 img , #about ", {

    y: 90,
    scale: 0,
    duration: 1,
    stagger: 0.7,

    scrollTrigger: {

        scroll: "body",
        trigger: "#page2-part2",
        scrub: 2,
        // markers : true ,
        start: "top 70%",
        end: "top 65%"
    }

})

// gsap.from(".card" , {

// y : 90,
// scale : 0.5 , 
// opacity : 0 ,
// // duration : 1 ,
// stagger : 0.1 , 

// scrollTrigger : {

// scroll : "body" ,
// trigger : ".card",
// scrub :1 , 
// // markers : true ,
// start : "top 70%" ,
// end : "top 65%"
// }
// })


gsap.from("#colon1", {

    y: -70,
    x: -70,

    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",

        scrub: 4,
        start: "top 45%",
        end: "top 40%",
        // markers: true,


    }


})


gsap.from("#colon2", {

    y: 70,
    x: 70,

    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",

        scrub: 4,
        start: "top 45%",
        end: "top 40%",
        // markers: true,


    }


})



gsap.to("#page4 h2", {

    y: -70,
    duration: 1,


    scrollTrigger: {
        trigger: "#page4 h2",
        scroll: "body",

        scrub: 1,
        start: "top 75%",
        end: "top 70%",
        // markers: true,


    }





})














