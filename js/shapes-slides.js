const shapesSlides = (direction) => {
  let currentSlide = document.querySelector('.shapes__item--current');
  let nextSlide;

  const changeClass = (firstX, secondX) => {
    if (nextSlide) {
      shapeSlides.forEach(el => {
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
      .from(nextSlide.querySelector('.shapes__content'), {
        xPercent: secondX,
        delay: -0.5
      });
  
      currentSlide.classList.remove('shapes__item--current');
      nextSlide.classList.add('shapes__item--current');
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