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

 var h = document.querySelector(".page5 h1")
 var btn = document.querySelector("#task1")

 var btn1 = document.querySelector("#task2")

 var btn2 = document.querySelector("#task3")

 var btn3 = document.querySelector("#task4")

 var btn4 = document.querySelector("#task5")

 var btn5 = document.querySelector("#task6")

 var btn6 = document.querySelector("#task7")

 var btn7 = document.querySelector("#task8")

 var btn8 = document.querySelector("#task9")

 var btn8 = document.querySelector("#task10")
 



 btn.addEventListener("click", function(){
      h.textContent = " Thank you so very muchfor the beautiful giftpacks; my heart melted. Inearly cried when Iopened one; I can onlyimagine how the womenin the shelters feel whenthey receive such a gift."

 })

 btn1.addEventListener("click", function(){
   h.textContent = "Thank you for the amazing experience! Excellent service, great quality, and outstanding support. Highly recommended—truly appreciated! Will return for sure. "

})


btn2.addEventListener("click", function(){
   h.textContent = "Great design, easy to navigate, and very informative. Highly recommended!"

})

btn3.addEventListener("click", function(){
   h.textContent = " Thank you so very muchfor the beautiful giftpacks; my heart melted. Inearly cried when Iopened one; I can onlyimagine how the womenin the shelters feel whenthey receive such a gift."

})
btn4.addEventListener("click", function(){
   h.textContent = "Excellent service, great quality, Highly recommended appreciated! Will return for sure. "

})
btn5.addEventListener("click", function(){
   
      h.textContent = "Highly recommended appreciated! Will return for sure. "
   
   })
 
btn6.addEventListener("click", function(){
   h.textContent = " Thank you so very muchfor the beautiful giftpacks; my heart melted. Inearly cried when Iopened one; I can onlyimagine how the womenin the shelters feel whenthey receive such a gift."

})
 
btn7.addEventListener("click", function(){
   h.textContent = "my heart melted. Inearly cried when Iopened one; I can onlyimagine how the womenin the shelters feel whenthey receive such a gift."

})
 

 