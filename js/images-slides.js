const imagesSlides = (direction) => {
  let currentSlide = document.querySelector('.slide-bg__inner--current');
  let nextSlide;

  const changeClass = (firstX, secondX) => {
    if (nextSlide) {
      imageSlides.forEach(el => {
        el.classList.remove('index');
      });
  
      currentSlide.classList.add('index');
  
      const tl = gsap.timeline({
        default: {ease: easing},
        onComplete: function() {
          currentSlide.classList.remove('index');
        }
      });
  
      tl.from(nextSlide, {
        xPercent: firstX,
    
      })
      .from(nextSlide.querySelector('.slide-bg__link'), {
        xPercent: secondX,
        delay: -0.5
      });
  
      currentSlide.classList.remove('slide-bg__inner--current');
      nextSlide.classList.add('slide-bg__inner--current');
    }
    return;
  }

  if (direction == 'down') {
    nextSlide = currentSlide.nextElementSibling;
    changeClass(100, -100);
  }else if (direction == 'up') {
    nextSlide = currentSlide.previousElementSibling;
    changeClass(-100, 100);
  }
}