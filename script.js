const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
 
 var vdCon = document.querySelector(".page4");
 
 var crsr = document.querySelector(".cursor")

 vdCon.addEventListener("mouseenter", function(){
    gsap.to(crsr,{
        opacity : 1,
        scale:1.2
    })
 })
 vdCon.addEventListener("mouseleave", function(){
    gsap.to(crsr,{
        opacity : 0, 
        scale: 0
    })
 })
 vdCon.addEventListener("mousemove", function(dets){
    gsap.to(crsr,{
        left:dets.x-50,
        top:dets.y-70
    })
 })


 gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.3
 })
 gsap.from(".page1 .img-container",{
    scale:0.9,
    opacity:0,
    delay:0.7,
    duration:0.5,
    // stagger:0.3
 })