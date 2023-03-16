const pressActive = document.querySelector('.header__burger')
const pressActiveMenu = document.querySelector('.menu-block')

pressActive.addEventListener('click', function() {
	if (pressActive.classList.contains('active')) {
		pressActive.classList.remove('active')
		pressActiveMenu.classList.remove('active')
		document.body.classList.remove('menu__opened')
	} else {
		pressActive.classList.add('active')
		pressActiveMenu.classList.add('active')
		document.body.classList.add('menu__opened')
	}
})

$(document).ready(function() {
	$('.spoiler-block__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(400);
		$(this).parent('.spoiler-block').toggleClass('active');
		$(this).parent('.spoiler-block').style.marginBottom = '100px'
	})
})