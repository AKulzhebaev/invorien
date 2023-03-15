$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    tems:3,
    responsive:{
      0:{
        items:2,   
        margin: 32,
        loop: true,        
        dots: false,
      },
      601:{
        items:3,
        dots: false,
        loop: true, 
      },
      1001:{
        items:3,
        margin: 48,
        dots: false,
        loop: true,        

      },
    }
  });
});

//  Video
const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

videoBtn.addEventListener("click", function () {
  videoPicture.classList.add("none");
  videoWrapper.classList.remove("video-overlay");
  videoBtn.classList.add("none");

  if (video.paused) {
    video.play();
  }
})

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
})

// Mobile

const OpenMobile = document.querySelector("#OpenMobile");
const MobileNav = document.querySelector("#MobileNav");
const CloseMobile = document.querySelector("#CloseMobile");

OpenMobile.onclick = function(){
  MobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
}

CloseMobile.onclick = function(){
  MobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");

}