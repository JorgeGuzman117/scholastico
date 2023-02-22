/*=============== DIV NOTIFICATION MESSAGE ===============*/
let divNotification =  document.querySelector('.notification'); 
let btnCloseNotification=  document.querySelector('.bxs-x-circle');

btnCloseNotification.addEventListener('click', () => {
	divNotification.classList.add('moveRight');

	setTimeout(function () {
		divNotification.classList.add('hide');
	}, 1000);	
});

window.addEventListener('load', function() {    
	setTimeout(function () {
		divNotification.classList.add('moveRight');
	}, 5000);	
	setTimeout(function () {
		divNotification.classList.add('hide');
	}, 6000);	
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header');

	//Cuando el scroll es mayor al viewport de 50 , añade la clase scroll-header a la etiqueta del header
	if(this.scrollY >= 50) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
}

window.addEventListener('scroll', scrollHeader); 

/*=============== SWIPER POPULAR ===============*/

var swiper = new Swiper(".popular__container", {
	spaceBetween:32,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.value__accordion-header');
	accordionHeader.addEventListener('click', () => {

		const openItem = document.querySelector('.accordion-open')
		toggleItem(item);
		if(openItem && openItem !== item) {
			toggleItem(openItem);
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.value__accordion-content');

	if(item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style');
		item.classList.remove('accordion-open');
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
		item.classList.add('accordion-open');
	}
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
		sectionTop = current.offsetTop - 58,
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	})
}

window.addEventListener('scroll', scrollActive); 


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	if(this.scrollY >= 350) {
		scrollUp.classList.add('show-scroll');
	} else {
		scrollUp.classList.remove('show-scroll');
	}
}

window.addEventListener('scroll', scrollUp); 


/*=============== DARK LIGHT THEME ===============*/
const imgLogo = document.getElementById('logoSch');
const imgFooterLogo = document.getElementsByClassName('footer__logo'); 
const imgAboutUsLogo = document.getElementsByClassName('us__img');
// console.log(imgFooterLogo[0].src);
const imgSch1 = 'LogoScholastico1.svg';
const imgSch2 = 'LogoScholastico2.png';   

const imgLogoMer = document.getElementsByClassName('footer__logo__mer');
const imgMer1 = 'mercedesbenz.png';
const imgMer2 = 'mercedes.png';

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

//Previosly selected Theme .. if user selected
const selectedTheme = localStorage.getItem('selected-theme'); 
const selectedIcon = localStorage.getItem('selected-icon');


//We obtain the current theme that the interface has .. by validating the dark-theme class
const getCurrentTheme = function() { 
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}	


const getCurrentIcon = function() { 
	themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';
}


// Validation if user previously chose a theme
if(selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Active / Desactivate theme with the Button
themeButton.addEventListener('click', () => {

	// imgLogo.src.includes(imgSch) ? imgLogo.src.replace(imgSch, 'LogoScholasticoDark') : imgSch;

	if(imgLogo.src.includes(imgSch1)) {
		imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
		imgFooterLogo[0].src = imgFooterLogo[0].src.replace(imgSch1, imgSch2); 
		
	} else if(imgLogo.src.includes(imgSch2)) {
		imgLogo.src = imgLogo.src.replace(imgSch2, imgSch1);
		imgFooterLogo[0].src = imgFooterLogo[0].src.replace(imgSch2, imgSch1);
		
	}

	if(imgLogoMer[0].src.includes(imgMer1)) {
		imgLogoMer[0].src = imgLogoMer[0].src.replace(imgMer1, imgMer2);
	} else if(imgLogoMer[0].src.includes(imgMer2)) {
		imgLogoMer[0].src = imgLogoMer[0].src.replace(imgMer2, imgMer1);
	}


	// imgLogo.src.includes(imgSch) ? imgLogo.src.replace(imgSch, 'LogoScholasticoDark') : imgSch;
	//Add or Remove the dark icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
	// localStorage.setItem('selected-logo', getCurrentLogoSch());

	// console.log(localStorage.getItem('selected-theme'));
	// console.log(localStorage.getItem('selected-icon'));
	// console.log(localStorage.getItem('selected-logo'));
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

const inicioTitle1 = document.getElementById('inicioTitle1');
const inicioTitle2 = document.getElementById('inicioTitle2');
const inicioTexto1 = document.getElementById('inicioTexto1');
const inicioDiv1 = document.getElementById('inicioDiv1');
const inicioDiv2 = document.getElementById('inicioDiv2');
const inicioDiv3 = document.getElementById('inicioDiv3');

const usImg1 = document.getElementById('usImg1');
const usTitle1 = document.getElementById('usTitle1');
const usTexto1 = document.getElementById('usTexto1');
const usContent1 = document.getElementById('usContent1');
const usContent2 = document.getElementById('usContent2');
const usContent3 = document.getElementById('usContent3');

const usImgBox1 = document.getElementById('usImgBox1');
const usImgTitle1 = document.getElementById('usImgTitle1');
const usImgDesc1 = document.getElementById('usImgDesc1');

const usImgBox2 = document.getElementById('usImgBox2');
const usImgTitle2 = document.getElementById('usImgTitle2');
const usImgDesc2 = document.getElementById('usImgDesc2');

const usImgBox3 = document.getElementById('usImgBox3');
const usImgTitle3 = document.getElementById('usImgTitle3');
const usImgDesc3 = document.getElementById('usImgDesc3');




const nosotrosImg1 = document.getElementById('nosotrosImg1');
const nosotrosDiv1 = document.getElementById('nosotrosDiv1'); 
const serviciosDiv1 = document.getElementById('serviciosDiv1'); 
const contactoImg1 = document.getElementById('contactoImg1');  
const contactoDiv1 = document.getElementById('contactoDiv1');

const contactoFormTexto1 = document.getElementById('contactoFormTexto1');
const contactoFormTexto2 = document.getElementById('contactoFormTexto2');
const contactoFormLabel1 = document.getElementById('contactoFormLabel1');
const contactoFormInput1 = document.getElementById('contactoFormInput1');
const contactoFormLabel2 = document.getElementById('contactoFormLabel2');
const contactoFormInput2 = document.getElementById('contactoFormInput2');
const contactoFormLabel3 = document.getElementById('contactoFormLabel3');
const contactoFormInput3 = document.getElementById('contactoFormInput3');
const contactoFormLabel4 = document.getElementById('contactoFormLabel4');
const contactoFormInput4 = document.getElementById('contactoFormInput4');

const contactoFormBtn1 = document.getElementById('contactoFormBtn1');

const footerDiv1 = document.getElementById('footerDiv1');
const footerDiv2 = document.getElementById('footerDiv2');
const footerCopry = document.getElementById('footerCopry');
const footerPrivacy = document.getElementById('footerPrivacy');


const cargarImagen = (entradas, observador) => {


	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){			
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px -50px 0px',
	threshold: 0.15
});



// SECCION NOSOTROS


observador.observe(usImgBox1);
observador.observe(usImgTitle1);
observador.observe(usImgDesc1);
observador.observe(usImgBox2);
observador.observe(usImgTitle2);
observador.observe(usImgDesc2);
observador.observe(usImgBox3);
observador.observe(usImgTitle3);
observador.observe(usImgDesc3);

observador.observe(nosotrosImg1);
observador.observe(nosotrosDiv1);

// observador.observe(serviciosDiv1);

// SECCION CONTACTO

observador.observe(contactoImg1);
observador.observe(contactoDiv1);

observador.observe(contactoFormTexto1);
observador.observe(contactoFormTexto2);
observador.observe(contactoFormLabel1);
observador.observe(contactoFormInput1);
observador.observe(contactoFormLabel2);
observador.observe(contactoFormInput2);
observador.observe(contactoFormInput3);
observador.observe(contactoFormLabel3);
observador.observe(contactoFormInput4);
observador.observe(contactoFormLabel4);
observador.observe(contactoFormInput4);
observador.observe(contactoFormBtn1);
observador.observe(footerDiv1);
observador.observe(footerDiv2);
observador.observe(footerCopry);
observador.observe(footerPrivacy);

// const imagen2 = document.getElementById('imagen2');

	// console.log(entradas)
	// console.log(observador)

// entrada.target.classList.remove('visible');

// observador.observe(imagen2);

