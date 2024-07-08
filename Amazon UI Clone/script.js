
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }

  function plusSlides(n) {
    slideIndex += n;
    showSlides();
  }




  function scrollSlides(direction) {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.clientWidth;
    slider.scrollLeft += direction * slideWidth;
}
