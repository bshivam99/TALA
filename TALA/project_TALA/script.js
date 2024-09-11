
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var menubar =  document.querySelector("#menubar") ;
var full = document.querySelector("#full-scr-nav")

var flag = 0 ; 

    menubar.addEventListener("click" , function(){
      
        if(flag == 0 ){
            full.style.top = "0vh" ; 
           
            document.querySelector("#nav").style.color  = "#222" ; 
            document.querySelector("#main").style.display  = "none" ; 
            
            flag = 1 ; 
        }
        else {
                full.style.top = "-100vh" ; 
               
                document.querySelector("#nav").style.color  = "#dadada" ;
                document.querySelector("#main").style.display  = "block" ; 
                flag = 0 ; 
        }
})
var tl = gsap.timeline() ; 

tl.from("#page1 h1" , {
    y : 60 , 
    duration : 0.4 , 
    opacity : 0 
} , "up")
.from("#page1 h2" , {
    dealy : 2 , 
    y : 60 , 
    duration : 0.5, 
    opacity : 0 

} , "up")
.from("#page1 h3" , {
    dealy : 2 , 
    y : 60 , 
    duration : 0.5, 
    opacity : 0 

} )
gsap.to("#page2 img" , {
    scale : 1 , 
    scrollTrigger : {
        trigger : "#page2 img" , 
        scroller : "#main" , 
        start : "top 66%" ,
        end : "top 15%" ,  
        scrub : 3 
    }
})       

gsap.to("#page2 h1" , {
    rotateX : 0,   
    scrollTrigger : {
        trigger : "#page2 h1" , 
        scroller : "#main" , 

        start : "top 70%" ,
        end : "top 62%" ,  
        scrub : 2
    }
}) 

var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1") 

slide1h1.forEach(function(elem){
    gsap.to(elem , {
        transform :' translateX(-100%)' ,  
        duration : 4 , 
        scrollTrigger : {
            trigger : "#page6" , 
            scroller : "#main" , 
            scrub : 5 
        }
    })
})
var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1") 
slide2h1.forEach(function(elem){
    gsap.to(elem , {
        transform :' translateX(100%)' ,  
        duration : 4 , 
        scrollTrigger : {
            trigger : "#page6" , 
            scroller : "#main" , 
            scrub : 5
        }
    })
})

document.querySelector("#element1").addEventListener("mousemove" , function(dets){
    document.querySelector("#element1 img").style.opacity = 1 ;
    document.querySelector("#element1 img").style.left = `${dets.x-150}px`  ;
    document.querySelector("#element1 img").style.top = `${dets.y-290}px`  ;      
}) ;  
document.querySelector("#element2").addEventListener("mousemove", function(dets){
    document.querySelector("#element2 img ").style.opacity = 1 ;
    document.querySelector("#element2 img ").style.left = `${dets.x-0}px`  ;
    document.querySelector("#element2 img ").style.top = `${dets.y-150}px`  ;
        
}) ;


document.querySelector("#element1").addEventListener("mouseleave" , function(elem){
    document.querySelector("#element1 img ").style.opacity = 0 ;
}) ;

document.querySelector("#element2").addEventListener("mouseleave" , function(elem){
    document.querySelector("#element2 img ").style.opacity = 0  ;
})


var menutime = gsap.timeline() ; 

menutime.to(".a" , {
    stagger : .9  ,
    duration : 5 ,  
    opacity : 1 ,
})



