const slider = document.querySelector("#slider4");
let sliderSection = document.querySelectorAll(".slider__section4");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft =document.querySelector("#btn-left4");
const btnRight= document.querySelector("#btn-right4");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
   let sliderSectionFirst = document.querySelectorAll(".slider__section4")[0];
   slider.style.marginLeft = "-33.2%";
   slider.style.transition = "all 0.2s";
   setTimeout(function(){

     slider.style.transition = "none";
     slider.insertAdjacentElement('beforeend', sliderSectionFirst); 
     slider.style.marginLeft = "-16.6%";
   }, 500);
  }

  function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section4");
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
   
      slider.style.transition = "none";
      slider.insertAdjacentElement ('afterbegin', sliderSectionLast);
      slider.style.marginLeft = "-16.6%";
    }, 500);
   }


   btnRight.addEventListener('click', function(){
       Next();
   });

   btnLeft.addEventListener('click', function(){
      Prev();
   });
/*
   setInterval(function(){

    Next();
   },2000);*/