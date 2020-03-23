// slider

let slideIndex = 1, // Слайд который будет виден, дальше передадим как аргумент.
slides = document.querySelectorAll(".slider-item"), 
prev = document.querySelector(".prev"),
next = document.querySelector(".next"),
dotsWrap = document.querySelector(".slider-dots"),
dots = document.querySelectorAll(".dot");

showSlides(slideIndex); // Показываем слайдер slideIndex который сейчас равен 1.

function showSlides(n) { // Сюда передается slideIndex.
if (n > slides.length) { // Если slideIndex > кол-ва slider-item то даем значение 1 и возвращаем на 1 слайд. 
  slideIndex = 1;
}
if (n < 1) { // Если slideIndex < 1 , то даем значение последнего слайдера, которое получаем через slides.length. 
  slideIndex = slides.length;
}

slides.forEach(item => (item.style.display = "none")); // Скрываем все слайды.
dots.forEach(item => item.classList.remove("dot-active")); // Удаляем у всех .dot класс dot-active.
slides[slideIndex - 1].style.display = "block"; // Слайдер slideIndex равен 1, мы делаем slideIndex - 1, что бы получить 0 слайд.
dots[slideIndex - 1].classList.add("dot-active"); // Тоже самое и с дотсами.
}

function plusSlides(n) { // Меняем значение showSlides из полученого результата на клик prev, next.
showSlides((slideIndex += n)); 
}

function currentSlides(n) {
showSlides((slideIndex = n));
}

prev.addEventListener("click", function() { // При клике на prev + -1. Передаем результат в plusSlides и там происходит сложение.
plusSlides(-1);
});

next.addEventListener("click", function() { // При клике на next 1. Передаем результат в plusSlides и там происходит сложение.
plusSlides(1); 
});

dotsWrap.addEventListener('click', function(event) {
for (let i = 0; i < dots.length + 1; i++) {
  if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
    currentSlides(i);
  }
}
});