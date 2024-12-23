jQuery(window).on('load', function() {
  setTimeout(function() {
    jQuery('.banner .animation_sec').addClass('come-in');
    setTimeout(function() {
      jQuery('.countdown.animation_sec').addClass('come-in');
    }, 300); // Delay for the second animation
  }, 300); // Initial delay before first animation
});

jQuery(document).ready(function($){

  
  $('header ul li a,footer .bottom_footer ul li a').each(function() {
    var _this = $(this); // Store the jQuery object
    var currentWidth = _this.width(); // Get the width of the element
    console.log(currentWidth);
    var newWidth = currentWidth + 6; // Add 5 to the current width
    _this.css('width', newWidth + 'px'); // Set the new width
});

  let lastScrollTop = 0; // Keep track of the last scroll position

      $(window).on("scroll", function () {
        let currentScroll = $(this).scrollTop(); // Get the current scroll position

        if (currentScroll > lastScrollTop) {
          // Scrolling down
          $("header").addClass("hidden");
        } else {
          // Scrolling up
          $("header").removeClass("hidden");
        }

        lastScrollTop = currentScroll; // Update the last scroll position
      });

$('header ul li.menu-item-has-children>a').after('<span></span>');
  if($(window).width() < 767 ){
    $('header nav>ul>li span').click(function(){
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    });
  }

  $('header .navbar-toggler').click(function(){
    $(this).toggleClass('active');
    $('header nav').toggleClass('active');
  });
  
  $('header ul li a').click(function(){
    $('header .navbar-toggler').removeClass('active');
    $('header nav').removeClass('active');
  });



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

(function($)
 {
  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          bottom       = _top + $t.height(),
          compareTop    = partial === true ? bottom : _top,
          compareBottom = partial === true ? _top : bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);
var win = $(window);
var allMods = $(".animation_sec,.rr_footer,footer");
win.scroll(function(event) {
  allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
          setTimeout(function(){
              el.addClass("come-in"); 
          },i*50);
      } 
  });
});

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

if($(window).width() > 767){

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
if ($('.on_instagram').length > 0) {
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
      }else{
        document.querySelector(".on_instagram").classList.remove("active");
      }

      if (progress >= 0.99) { 
        document.querySelector(".on_instagram").classList.add("open");
      }else{
        document.querySelector(".on_instagram").classList.remove("open");
      }
    }
  }
});

circlezoom1.to(".on_instagram", {
  y: -300, // Moves up by 150px
  ease: "none",
});
/* Three blog end */
}

/* Three blog */
if ($('.social_media').length > 0) {
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
  //y: 0, // Maintains the top position at -50px
  //marginLeft: "0", // Maintains margin-left
  //scale: 0.8, // Scale to 1
  maxWidth:"70%",
  maxHeight:"70%",
  borderRadius: "100px", // Keeps the border-radius
  ease: "none",
});


let scrollDistance4 = 600;
const circlezoom4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banchmarketing",
    scrub: 0.5, // Smooth scrolling animation
    start: "top 100%", // Start when .on_instagram reaches 60% of the viewport
    end: `+=${scrollDistance4}`, // Animation ends after scrollDistance1
    pin: false, // No pinning
  }
});

circlezoom4.to(".banchmarketing h2", {
  x: 0, // Moves up by 150px
  ease: "none",
});

}






}


// Ensure the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   if ($('.profitable_campaigns').length > 0) {

//     gsap.registerPlugin(ScrollTrigger);

//     const scrollDistance11 = 1000;

//     // Create a timeline for sequential animations
//     const animationTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".profitable_campaigns", // Trigger animation when `.profitable_campaigns` enters the viewport
//         start: "top top", // Start when the section reaches 50% of the viewport
//         end: `+=${scrollDistance11}`, // Animation duration
//         scrub: true, // Smooth scrolling animations
//         pin: true, // Pin the section during animations
//         markers: true, // Enable debugging markers (remove in production)
//       },
//     });

//     // Sequential animations for the `.col` elements
//     animationTimeline
//       .to(".profitable_campaigns .col1", { 
//         top: 0, 
//         ease: "power1.out", 
//         duration: 0.5, 
//         onComplete: () => {
//           document.querySelector(".profitable_campaigns .col1").classList.add("active");
//         },
//       }) // Animate col1
//       .to(
//         ".profitable_campaigns .col2", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             document.querySelector(".profitable_campaigns .col2").classList.add("active");
//           },
//         },
//         "+=0.5" // Slight delay for sequential animations
//       ) 
//       .to(
//         ".profitable_campaigns .col3", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             document.querySelector(".profitable_campaigns .col3").classList.add("active");
//           },
//         },
//         "+=0.5"
//       );

//     // Expand animations when elements become "open"
//     document.querySelectorAll(".profitable_campaigns .col").forEach((el) => {
//       el.addEventListener("click", () => {
//         el.classList.add("open");
//       });
//     });

//   }
// });


// Ensure the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   if ($('.profitable_campaigns').length > 0) {

//     gsap.registerPlugin(ScrollTrigger);

//     const scrollDistance11 = 1000;

//     // Create a timeline for sequential animations
//     const animationTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".profitable_campaigns", // Trigger animation when `.profitable_campaigns` enters the viewport
//         start: "top top", // Start when the section reaches the top of the viewport
//         end: `+=${scrollDistance11}`, // Animation duration
//         scrub: true, // Smooth scrolling animations
//         pin: true, // Pin the section during animations
//         markers: true, // Enable debugging markers (remove in production)
//       },
//     });

//     // Sequential animations for the `.col` elements
//     animationTimeline
//       .to(".profitable_campaigns .col1", { 
//         top: 0, 
//         ease: "power1.out", 
//         duration: 0.5, 
//         onComplete: () => {
//           const col1 = document.querySelector(".profitable_campaigns .col1");
//           col1.classList.add("active");
          
//           // Add `open` class after a slight delay
//           setTimeout(() => {
//             col1.classList.add("open");
//           }, 200); // Adjust delay as needed
//         },
//       }) // Animate col1
//       .to(
//         ".profitable_campaigns .col2", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             const col2 = document.querySelector(".profitable_campaigns .col2");
//             col2.classList.add("active");

//             // Add `open` class after a slight delay
//             setTimeout(() => {
//               col2.classList.add("open");
//             }, 200); // Adjust delay as needed
//           },
//         },
//         "+=0.5" // Slight delay for sequential animations
//       ) 
//       .to(
//         ".profitable_campaigns .col3", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             const col3 = document.querySelector(".profitable_campaigns .col3");
//             col3.classList.add("active");

//             // Add `open` class after a slight delay
//             setTimeout(() => {
//               col3.classList.add("open");
//             }, 200); // Adjust delay as needed
//           },
//         },
//         "+=0.5"
//       );
//   }
// });

// Ensure the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   if ($('.profitable_campaigns').length > 0) {

//     gsap.registerPlugin(ScrollTrigger);

//     const scrollDistance11 = 1000;

//     // Create a timeline for sequential animations
//     const animationTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".profitable_campaigns", // Trigger animation when `.profitable_campaigns` enters the viewport
//         start: "top top", // Start when the section reaches the top of the viewport
//         end: `+=${scrollDistance11}`, // Animation duration
//         scrub: true, // Smooth scrolling animations
//         pin: true, // Pin the section during animations
//         markers: true, // Enable debugging markers (remove in production)
//       },
//     });

//     // Sequential animations for the `.col` elements
//     animationTimeline
//       .to(".profitable_campaigns .col1", { 
//         top: 0, 
//         ease: "power1.out", 
//         duration: 0.5, 
//         onComplete: () => {
//           const col1 = document.querySelector(".profitable_campaigns .col1");
//           col1.classList.add("active");

//           // Add `open` class after a slight delay
//           setTimeout(() => {
//             col1.classList.add("open");
//           }, 200);
//         },
//         onReverseComplete: () => {
//           { top: "500px", duration: 0.5 }
//           const col1 = document.querySelector(".profitable_campaigns .col1");
//           col1.classList.remove("open");

//           setTimeout(() => {
//             col1.classList.remove("active");
//           }, 200);
//         },
//       })
//       .to(
//         ".profitable_campaigns .col2", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             const col2 = document.querySelector(".profitable_campaigns .col2");
//             col2.classList.add("active");

//             setTimeout(() => {
//               col2.classList.add("open");
//             }, 200);
//           },
//           onReverseComplete: () => {
//             { top: "500px", duration: 0.5 }
//             const col2 = document.querySelector(".profitable_campaigns .col2");
//             col2.classList.remove("open");

//             setTimeout(() => {
//               col2.classList.remove("active");
//             }, 200);
//           },
//         },
//         "+=0.5"
//       )
//       .to(
//         ".profitable_campaigns .col3", 
//         { 
//           top: 0, 
//           ease: "power1.out", 
//           duration: 0.5, 
//           onComplete: () => {
//             const col3 = document.querySelector(".profitable_campaigns .col3");
//             col3.classList.add("active");
//             setTimeout(() => {
//               col3.classList.add("open");
//             }, 200);
//           },
//           onReverseComplete: () => {
//             { top: "500px", duration: 0.5 }
//             const col3 = document.querySelector(".profitable_campaigns .col3");
//             col3.classList.remove("active");
//             setTimeout(() => {
//               col3.classList.remove("open");
//             }, 200);
//           },
//         },
//         "+=0.5"
//       );
//   }
// });


// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  if ($('.profitable_campaigns').length > 0) {

    gsap.registerPlugin(ScrollTrigger);

    const scrollDistance11 = 1000;

    // Create a timeline for sequential animations
    const animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".profitable_campaigns", // Trigger animation when `.profitable_campaigns` enters the viewport
        start: "top top", // Start when the section reaches the top of the viewport
        end: `+=${scrollDistance11}`, // Animation duration
        scrub: true, // Smooth scrolling animations
        pin: true, // Pin the section during animations
        markers: true, // Enable debugging markers (remove in production)
      },
    });

    // Sequential animations for the `.col` elements
    animationTimeline
      .to(".profitable_campaigns .col1", { 
        top: 0, 
        ease: "power1.out", 
        duration: 0.5, 
        onComplete: () => {
          const col1 = document.querySelector(".profitable_campaigns .col1");
          col1.classList.add("active");

          // Add `open` class after a slight delay
          setTimeout(() => {
            col1.classList.add("open");
          }, 200);
        },
        onReverseComplete: () => {
          const col1 = document.querySelector(".profitable_campaigns .col1");

          // Move back to `top: 500px` before removing classes
          gsap.to(col1, {
            top: "120%",
            duration: 0.5,
            onComplete: () => {
              col1.classList.remove("open");
              col1.classList.remove("active");
            },
          });
        },
      })
      .to(
        ".profitable_campaigns .col2", 
        { 
          top: 0, 
          ease: "power1.out", 
          duration: 0.5, 
          onComplete: () => {
            const col2 = document.querySelector(".profitable_campaigns .col2");
            col2.classList.add("active");

            setTimeout(() => {
              col2.classList.add("open");
            }, 200);
          },
          onReverseComplete: () => {
            const col2 = document.querySelector(".profitable_campaigns .col2");

            // Move back to `top: 500px` before removing classes
            gsap.to(col2, {
              top: "120%",
              duration: 0.5,
              onComplete: () => {
                col2.classList.remove("open");
                col2.classList.remove("active");
              },
            });
          },
        },
        "+=0.5"
      )
      .to(
        ".profitable_campaigns .col3", 
        { 
          top: 0, 
          ease: "power1.out", 
          duration: 0.5, 
          onComplete: () => {
            const col3 = document.querySelector(".profitable_campaigns .col3");
            col3.classList.add("active");
            setTimeout(() => {
              col3.classList.add("open");
            }, 200);
          },
          onReverseComplete: () => {
            const col3 = document.querySelector(".profitable_campaigns .col3");

            // Move back to `top: 500px` before removing classes
            gsap.to(col3, {
              top: "120%",
              duration: 0.5,
              onComplete: () => {
                col3.classList.remove("open");
                col3.classList.remove("active");
              },
            });
          },
        },
        "+=0.5"
      );
  }
});
