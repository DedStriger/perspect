	document.addEventListener('DOMContentLoaded', ()=>{
		const nav = document.querySelector('.header__nav')
		const burger = document.querySelector('.header__burger')
		const closeBurger = document.querySelector('.nav-close__icon')
		const texts2 = document.querySelector('section .text')
		const texts = document.querySelectorAll('section .text')
		const lines = document.querySelectorAll('.text__line')
		const header = document.querySelector('.header')
		const headerBlock = document.querySelector('header')
		const sections = document.querySelectorAll('.section')
		const active = document.querySelector('nav-active')
		const logos = document.querySelectorAll('.logo__item')
		var scene = document.querySelector('.header__img');
		const lang = document.querySelector('.header__lang')
		var parallax = new Parallax(scene);




		lang.addEventListener('click', () => {
		document.querySelector('.lang-container.active') 
		?	document.querySelector('.lang-container').classList.remove('active')
		: document.querySelector('.lang-container').classList.add('active')
		})

		window.addEventListener('scroll', function(e){
			let windowTop = window.pageYOffset


			headerBlock.style.opacity = screen.height >= windowTop ? (screen.height - windowTop) / screen.height : 1

			if(screen.height <= windowTop){
				header.style.opacity = 1;
				document.querySelector('header').classList.add('hide')
				} else {
					document.querySelector('header').classList.remove('hide')
				}

			headerBlock.style.transform = `scale(${screen.height >= windowTop ? (1 - ((screen.height - windowTop) / screen.height)) + 1 : 1})`

			header.getBoundingClientRect().top < screen.height
				&& header.classList.add('fixed')
				windowTop < screen.height 
				&& header.classList.remove('fixed')

			texts.forEach(text => {
				let top = text.getBoundingClientRect().top
				if(450 > top){
					
					text.classList.add('animated', 'fadeInLeft', 'active')
				}
			})

			logos.forEach(logo => {
				if(logo.getBoundingClientRect().top < 450){
						logo.classList.add('animated', 'slideInLeft', 'active')
				}
			})

			sections.forEach(section => {

				if(section.getBoundingClientRect().top < 74){
					section.classList.contains('section--white')
					? header.classList.add('blue')
					: header.classList.remove('blue')
				}
				if(section.getBoundingClientRect().top < 100){
				 document.querySelector('.nav-active').innerHTML = section.getAttribute('id')
				 document.querySelector('.burger__active').innerHTML = section.getAttribute('id')
					document.querySelector(`.js-${section.getAttribute('id')}`).classList.add('active')
					document.querySelectorAll(`.header__nav-item:not(.js-${section.getAttribute('id')})`)
					.forEach(item => item.classList.remove('active'))
				}
			})

			document.querySelectorAll(`.header__nav-item`).forEach(item => {
				item.addEventListener('click', ()=>{
					nav.style.left = 'calc(-100px - 100%)'
				})
			})

			if(windowTop < screen.height){
				document.querySelector('.nav-active').innerHTML = ''
				document.querySelector('.burger__active').innerHTML = ''
		} 
		})

		burger.addEventListener('click', ()=>{
		 nav.style.left = '0px' 
		})

		closeBurger.addEventListener('click', ()=>{
			nav.style.left = 'calc(-100px - 100%)'
		})
	})