var slideIndex = 0;
showSlides();
slideIndex = 0;
showSlides2();

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slideIndex++;
  
    if (slideIndex > slides.length) 
    {
      slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function showSlides2() 
{
    var i;
    var slides = document.getElementsByClassName("slide2");
  
    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";  
    }
  
    slideIndex++;
    
    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }
  
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides2, 3000); // Change image every 2 seconds
  }
  