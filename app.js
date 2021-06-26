function slidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide') //получаем док слайд

	slides[activeSlide].classList.add('active') 

	for (const slide of slides) {
		slide.addEventListener('click', () => { //при клике слайд становится активным
			clearActiveClasses() //чтобы другие слайды не осатвались на месте
			slide.classList.add('active')
		})
	}

	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active')
		})
	}
}

slidesPlugin(4) /*4 показывает 5ю картинку*/