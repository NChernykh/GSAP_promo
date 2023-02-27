const textSlides = (direction) => {
  let currentSlide = document.querySelector('.slides__item--active');
  let nextSlide;

  const changeClass = (firstX, secondX) => {
    if (nextSlide && !nextSlide.classList.contains('main-section__title')) {
  
      const tl = gsap.timeline({
        default: {ease: easing}
      });

      tl.to(currentSlide.querySelector('.slides__title'), {
        opacity: 0,
        y: 100
      })
      .to(currentSlide.querySelector('.designers-info'), {
        opacity: 0,
        y: 100
      }, '-=0.5')
      .to(nextSlide.querySelector('.slides__title'), {
        opacity: 1,
        y: 0
      }, '-=0.1')
      .to(nextSlide.querySelector('.designers-info'), {
        opacity: 1,
        y: 0
      }, '-=0.5')

      currentSlide.classList.remove('slides__item--active');
      nextSlide.classList.add('slides__item--active');
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