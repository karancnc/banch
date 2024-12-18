// jQuery(window).on('load', function() {

// });

jQuery(document).ready(function($){

    /* megnify */
    $('[data-pop="megnify"]').each(function(){
      var _this = $(this);
      _this.find('.image-pop').magnificPopup({
          type: 'image',
            mainClass: 'mfp-with-zoom', 
            gallery:{
                      enabled:true
                  },
          
            zoom: {
              enabled: true, 
              duration: 300, // duration of the effect, in milliseconds
              easing: 'ease-in-out', // CSS transition easing function
              opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }        
      });
  });
/* megnify */

 // Function to pause all videos
    function pauseAllVideos() {
      $('video').each(function () {
          this.pause(); // Pause the video
          $(this).siblings('.play-icon').show();  // Show the play icon
          $(this).siblings('.pause-icon').hide(); // Hide the pause icon
      });
    }

    // Play/Pause on clicking the play-icon
    $('.customers-testimonials .item').on('click', '.play-icon', function () {
      let $video = $(this).siblings('video'); // Target the video in the current item
      
      pauseAllVideos(); // Pause all other videos
      
      $video.get(0).play(); // Play the clicked video
      
      // Toggle play/pause icons
      $(this).hide(); // Hide the play icon
      $(this).siblings('.pause-icon').show(); // Show the pause icon
    });

    // Pause on clicking the pause-icon
    $('.customers-testimonials .item').on('click', '.pause-icon', function () {
      let $video = $(this).siblings('video'); // Target the video in the current item
      
      $video.get(0).pause(); // Pause the video
      
      // Toggle play/pause icons
      $(this).hide(); // Hide the pause icon
      $(this).siblings('.play-icon').show(); // Show the play icon
    });

});

$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


/* banner aniamtion */
gsap.registerPlugin(ScrollTrigger);
let scrollDistance3 = 370;
const circlezoom = gsap.timeline({
  scrollTrigger: {  
    trigger: ".banner_image", 
    scrub: 0.1, 
    pin: true, 
    
    //start: "top-=65% top+=20%", // Start at top
    start: "top top+=50%",
    end: `+=${scrollDistance3}`,
    //end: "bottom top+=80%", // End when bottom hits top
    //markers: true, // Debug markers
    pinSpacing: true, // Pin with accurate spacing
  }
});

circlezoom.to(".banner_image .bg", {
  top: "0%",          
  scale: 1,           
  ease: "none",
  borderRadius: "112px",
}); 
/* banner aniamtion end  */

/* Three blog */
gsap.registerPlugin(ScrollTrigger);
let scrollDistance1 = 300;

// Timeline with ScrollTrigger
const circlezoom1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".on_instagram",
    scrub: 0.5, // Smooth scrolling animation
    start: "top 100%", // Start when .on_instagram reaches 60% of the viewport
    end: `+=${scrollDistance1}`, // Animation ends after scrollDistance1
    pin: false, // No pinning
    //markers: true, // Debugging markers (remove in production)
    onUpdate: (self) => {
      let progress = self.progress; // Progress of scroll (0 to 1)
      if (progress >= 0.8) { 
        document.querySelector(".on_instagram").classList.add("active");
      }
      if (progress >= 0.99) { 
        document.querySelector(".on_instagram").classList.add("open");
      }
    }
  }
});

circlezoom1.to(".on_instagram", {
  y: -300, // Moves up by 150px
  ease: "none",
});
/* Three blog end */


/* Three blog */
gsap.registerPlugin(ScrollTrigger);

let scrollDistance2 = 600;

// Timeline with ScrollTrigger
const circlezoom2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".social_media",
    scrub: 0.5, // Smooth scrolling animation
    start: "top top+=10%", // Start when .social_media reaches 50% of the viewport
    end: `+=${scrollDistance2}`, // Animation ends after scrollDistance2
    //markers: true, // Debugging markers (remove in production)
    pinSpacing: true,
    pin: true, 
  }
});

// Animate scale while maintaining position values
circlezoom2.to(".social_media .bg", {
  y: 0, // Maintains the top position at -50px
  marginLeft: "0", // Maintains margin-left
  scale: 0.8, // Scale to 1
  borderRadius: "100px", // Keeps the border-radius
  ease: "none",
});
