/*=============== MAIN DIV LOADER ===============*/
window.addEventListener("load", () => {
// $(document).ready(function () {
	let bodyy = document.querySelector("body"); // First hide main scroll to avoid conflicts in preloader & begining video
	bodyy.classList.add("hide-scroll");

	const loader = document.querySelector("#preloader");
	setTimeout(function () {
		loader.classList.add('hide');
	}, 8000);

	// Div that contains the first image of the scholastico bus
	let schBus = document.querySelector(".loader-schBus");
	// Div that contains the scholastico bus WHEELS
	let schBusWheels = document.querySelector(".sch-bus");
	// First image of the scholastico bus
	let imgschBus1 = schBus.querySelector("img");
	//Wheels alignment of the scholastico bus
	let front = document.querySelector(".front");
	let back = document.querySelector(".back");
	//Wheels of the scholastico bus
	let wheelUno = document.querySelector("#wheelUno");
	let wheelDos = document.querySelector("#wheelDos");

	// 1 Animation of the 1 image
	setTimeout(function () {
		schBus.classList.add("bus_hide");
		schBusWheels.classList.add("bus_hide");
	}, 1);
	// Fade In of the 2 image
	setTimeout(function () {
		schBus.classList.remove("bus_hide");
		schBusWheels.classList.remove("bus_hide");

		let imgschBus2 = imgschBus1.src.replace("schoolbus_amarillo", "schoolbus2");
		imgschBus1.src = imgschBus2;
		schBus.classList.add("bus_show");
		schBusWheels.classList.add("bus_show");

	}, 1050);

	// 2 Animation of the 2 image
	setTimeout(function () {
		schBus.classList.remove("bus_show");
		schBusWheels.classList.remove("bus_show");
		schBus.classList.add("bus_hide");
		schBusWheels.classList.add("bus_hide");
	}, 2050);

	// Fade In of the 3 image
	setTimeout(function () {
		schBus.classList.remove("bus_hide");
		schBusWheels.classList.remove("bus_hide");

		let imgschBus3 = imgschBus1.src.replace("schoolbus2", "bus_nuevo");
		imgschBus1.src = imgschBus3;
		schBus.classList.add("bus_show");
		schBusWheels.classList.add("bus_show");

		back.style.margin = "0 21px";
		front.style.margin = "0 115px";
		wheelUno.style.height = "21px";
		wheelUno.style.width = "21px";
		wheelUno.style.bottom = "56px";
		wheelDos.style.height = "21px";
		wheelDos.style.width = "21px";
		wheelDos.style.bottom = "56px";
	}, 3050);

	// 3 Animation of the 3 image
	setTimeout(function () {
		schBus.classList.remove("bus_show");
		schBusWheels.classList.remove("bus_show");
		schBus.classList.add("bus_hide");
		schBusWheels.classList.add("bus_hide");
	}, 4050);

	// Fade In of the last image the 4 image
	setTimeout(function () {
		schBus.classList.remove("bus_hide");
		schBusWheels.classList.remove("bus_hide");
		let imgschBus3 = imgschBus1.src.replace("bus_nuevo", "e-transit");
		imgschBus1.src = imgschBus3;
		schBus.classList.add("bus_show");
		schBusWheels.classList.add("bus_show");


		back.style.margin = "0 2px";
		front.style.margin = "0 118px";

		wheelUno.classList.add("blueW");
		wheelDos.classList.add("blueW");

		wheelUno.style.border = "2px solid #ffffff";
		wheelDos.style.border = "2px solid #ffffff";
	}, 5050);

	// 4 Animation of the 4 image
	setTimeout(function () {
		schBus.classList.remove("bus_show");
		schBusWheels.classList.remove("bus_show");
		schBus.classList.add("bus_hide");
		schBusWheels.classList.add("bus_hide");
	}, 7500);

});

// REMOVE CLASS HIDE SCROLL FOR SCROLLING AFTER PRELOADER & VIDEO ENDS 
let bodyy = document.querySelector("body");
setTimeout(function () {
	bodyy.classList.remove("hide-scroll");
}, 20000);

/*=============== VIDEO DISPLAY AT THE BEGINING ===============*/
let video_begin = document.querySelector('.video_begin');
let btn_begin = document.querySelector('.btn_begin');
// For the words video
let wordsContainer = document.querySelector('.container-text-video');
let wordsFall = document.querySelector('.wordsVideo');

// Play video after 6 seconds
setTimeout(function () {
	if (window.matchMedia("(max-width: 580px)").matches) {
		video_begin.style.background = "#000";
		video_begin.style.objectFit = "contain";
	}
	video_begin.play();
	wordsFall.style.display = "block";
}, 6000);

// Hide video after de duration time of the video
setTimeout(function () {
	video_begin.classList.add("begin_hide");
	wordsContainer.classList.add("begin_hide");
	btn_begin.classList.add("begin_hide");
	//This remove the words,video,btn to avoid ux error
	setTimeout(function () {
		video_begin.style.display = "none";
		wordsContainer.style.display = "none";
		btn_begin.style.display = "none";
	}, 2050);

	// For begining notification message
	setTimeout(function () {
		divNotification.classList.add('moveRight');
	}, 6000);
	setTimeout(function () {
		divNotification.classList.add('hide');
	}, 7000);
}, 19550);

// Hide video manually with skip btn
btn_begin.addEventListener('click', () => {
	bodyy.classList.remove("hide-scroll"); // dont forget remove class-> hide scroll.. for web scrolling
	video_begin.classList.add("begin_hide");
	wordsContainer.classList.add("begin_hide");
	btn_begin.classList.add("begin_hide");
	//This remove the words,video, btn to avoid ux error
	setTimeout(function () {
		video_begin.style.display = "none";
		wordsContainer.style.display = "none";
		btn_begin.style.display = "none";
	}, 2050);
	// For begining notification message
	setTimeout(function () {
		divNotification.classList.add('moveRight');
	}, 6000);
	setTimeout(function () {
		divNotification.classList.add('hide');
	}, 7000);
});


/*=============== DIV MODAL AT BTN CONOCER MAS ===============*/
let mainBody = document.querySelector("body");
let btnConoceMas = document.querySelector("#inicioBtn1");
const divModal = document.querySelector('.modal-view');

btnConoceMas.addEventListener('click', () => {
	divModal.style.zIndex = "1000";
	divModal.classList.add("modal_show");
	//Esconde el scroll principal del body
	mainBody.classList.add("hide-scroll");

	setTimeout(function () {
		divModal.style.opacity = "1";
	}, 1000);
});

let btnCloseModal = document.querySelector('.modal-close');
btnCloseModal.addEventListener("click", closeModal);
function closeModal() {
	divModal.classList.remove("modal_show"); //Al cerrar Removemos animacion modal show
	divModal.classList.add("modal_hide");
	divModal.style.zIndex = "-5";
	//Regresar funcionalidad de scroll al body
	mainBody.classList.remove("hide-scroll");
	setTimeout(function () {
		divModal.style.opacity = "0";
		divModal.classList.remove("modal_hide"); //Al 1s Removemos animacion modal hide
	}, 1000);
}

/*=============== DIV MODAL AT BTN "NOSOTROS" ===============*/
let btnNosotros = document.querySelector("#btnNosotros");
btnNosotros.style.cursor = "pointer";
const divModalNosotros = document.querySelector('#modalNosotros');

btnNosotros.addEventListener('click', () => {
	divModalNosotros.style.zIndex = "1000";
	divModalNosotros.classList.add("modal_show");
	//Esconde el scroll principal del body
	mainBody.classList.add("hide-scroll");

	setTimeout(function () {
		divModalNosotros.style.opacity = "1";
	}, 1000);
});

let btnCerrarNosotros = document.querySelector('#cerrarNosotros');
btnCerrarNosotros.addEventListener("click", cerrarModalNosotros);
function cerrarModalNosotros() {
	divModalNosotros.classList.remove("modal_show"); //Al cerrar Removemos animacion modal show
	divModalNosotros.classList.add("modal_hide");
	divModalNosotros.style.zIndex = "-5";
	//Regresar funcionalidad de scroll al body
	mainBody.classList.remove("hide-scroll");
	setTimeout(function () {
		divModalNosotros.style.opacity = "0";
		divModalNosotros.classList.remove("modal_hide"); //Al 1s Removemos animacion modal hide
	}, 1000);
}

/*=============== DIV NOTIFICATION MESSAGE ===============*/
let divNotification = document.querySelector('.notification');
let btnCloseNotification = document.querySelector('.bxs-x-circle');

btnCloseNotification.addEventListener('click', () => {
	divNotification.classList.add('moveRight');
	setTimeout(function () {
		divNotification.classList.add('hide');
	}, 1000);
});

// Notification message responsive

function positionNoti() {
	let match = 0;
	if (noti_control.matches) {
		divNotification.style.display = "none";
		window.onscroll = function () {
			if (window.scrollY > 40) {
				match = 1;
				if (match === 1) divNotification.style.display = "block";
			}
		};
	}
}

let noti_control = window.matchMedia("(max-width: 1023px)");
positionNoti();


// para cuando carga la página
// window.addEventListener('load', function() {    
// 	setTimeout(function () {
// 		divNotification.classList.add('moveRight');
// 	}, 5000);	
// 	setTimeout(function () {
// 		divNotification.classList.add('hide');
// 	}, 6000);	
// });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header');
	let btnChange_theme = document.querySelector(".change-theme");
	let notPosition = document.querySelector(".notification");

	//Cuando el scroll es mayor al viewport de 50 , añade la clase scroll-header a la etiqueta del header
	if (this.scrollY >= 40) {
		header.classList.add('scroll-header');
		header.style.top = "25px";
		header.style.width = "79vw";
		header.style.borderRadius = "25px";
		header.style.left = "50%";
		header.style.transform = "translate(-50%)";
		// btnChange_theme.style.top = "2px";
		// btnChange_theme.style.right = "7px";
	} else {
		header.classList.remove('scroll-header');
		header.style.top = "0";
		header.style.width = "100%";
		header.style.borderRadius = "0";
		// btnChange_theme.style.top = "15px";
		// btnChange_theme.style.right = "30px";
	}
}

window.addEventListener('scroll', scrollHeader);


// PRUEBA SLIDER DE INICIO
// let indice = 1;

// showSlides(indice); // Posición dónde se encuentra el elemento, inciia en 1 (1 imagen)

// function moveSlide(n) {
// 	showSlides(indice+=n); // Para avanzar o mover de posición el elemento
// }

// function slidePosition() { // Para posicionar el elemento con las barras
// 	showSlides(indice=n)
// }

// setInterval(function time(){
// 	showSlides(indice+=1) //concatenación
// },6000);

// function showSlides(n){
// 	let i;
// 	let slides = document.getElementsByClassName('slider');
// 	let barras = document.getElementsByClassName('circle');

// 	if (n> slides.length) { // Si n pasa del limite de posiciones se regresa a la posicion(1)
// 		indice=1;
// 	}

// 	if (n < 1) { // si n es menor a la posicióon mínima 1 se cambia a la última posición dependiendo tamaño del slider
// 		indice = slides.length;
// 	}

// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}

// 	for (i = 0; i < barras.length; i++) {
// 		barras[i].className = barras[i].className.replace(" active", "");
// 	}

// 	slides[indice-1].style.display = 'block';
// 	barras[indice-1].className += ' active'; // Para concatenar la Clase en este caso se le agrega espacio para que no quede junto
// }

/*=============== SWIPER POPULAR ===============*/

//Para slider Inicio
let swiperHome = new Swiper(".swiper-home", {
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});





// Para Inicio, Servicios y Clientes
var swiper = new Swiper(".popular__container", {
	spaceBetween: 40,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		350: {
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1023: {
			slidesPerView: 'auto',
			spaceBetween: 40,
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
		},
	},
});

// Para Car slider
let swiperCar = new Swiper(".popularCar__container", {
	centeredSlides: true,
	loop: true,
	spaceBetween: 24,
	slidesPerView: 'auto',
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 1,
			spaceBetween: 48,
		},
	},
});




/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.value__accordion-header');
	accordionHeader.addEventListener('click', () => {

		const openItem = document.querySelector('.accordion-open')
		toggleItem(item);
		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.value__accordion-content');

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style');
		item.classList.remove('accordion-open');
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
		item.classList.add('accordion-open');
	}
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
// console.log(sections);

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			// document.querySelector('.nav__list2 a[href*=' + sectionId + ']').classList.add('active-link'); 
			document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active-link');
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			// document.querySelector('.nav__list2 a[href*=' + sectionId + ']').classList.remove('active-link');
			document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active-link');
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	})
}

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	if (this.scrollY >= 350) {
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
const getCurrentTheme = function () {
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}


const getCurrentIcon = function () {
	themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';
}


// Validation if user previously chose a theme
if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Active / Desactivate theme with the Button
themeButton.addEventListener('click', () => {

	// imgLogo.src.includes(imgSch) ? imgLogo.src.replace(imgSch, 'LogoScholasticoDark') : imgSch;

	if (imgLogo.src.includes(imgSch1)) {
		imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
		// imgFooterLogo[0].src = imgFooterLogo[0].src.replace(imgSch1, imgSch2); 
		// imgAboutUsLogo[0].src = imgAboutUsLogo[0].src.replace(imgSch1, imgSch2); Se oculto logo Sch en seccion Nosotros
	} else if (imgLogo.src.includes(imgSch2)) {
		imgLogo.src = imgLogo.src.replace(imgSch2, imgSch1);
		// imgFooterLogo[0].src = imgFooterLogo[0].src.replace(imgSch2, imgSch1);
		// imgAboutUsLogo[0].src = imgAboutUsLogo[0].src.replace(imgSch2, imgSch1); Se oculto logo Sch en seccion Nosotros
	}

	// if(imgLogoMer[0].src.includes(imgMer1)) {
	// 	imgLogoMer[0].src = imgLogoMer[0].src.replace(imgMer1, imgMer2);
	// } else if(imgLogoMer[0].src.includes(imgMer2)) {
	// 	imgLogoMer[0].src = imgLogoMer[0].src.replace(imgMer2, imgMer1);
	// }


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

	console.log(getCurrentTheme());
	console.log(getCurrentIcon());

});

// Activate / Desactivate theme automatically with Date
let fecha = new Date();
console.log(fecha);
console.log(fecha.getHours());

// console.log(fecha.getTime());
const hrDefLight = new Date();
hrDefLight.setHours(8);
hrDefLight.setMinutes(0);
hrDefLight.setSeconds(0);

const hrDefDark = new Date();
hrDefDark.setHours(19);
hrDefDark.setMinutes(0);
hrDefDark.setSeconds(0);

const hrEndDay = new Date();
hrEndDay.setHours(23);
hrEndDay.setMinutes(59);
hrEndDay.setSeconds(59);
hrEndDay.setMilliseconds(999);

// Prueba para restar una hr definida como constante a la hr obtenida para aplicarla en el metodo detTimeOut y asi ejecutar automaticamente la función

// setTimeout(function () {
// 	imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
// 	document.body.classList.toggle(darkTheme);
// 	themeButton.classList.toggle(iconTheme);
// 	localStorage.setItem('themeDark', 1);
// }, autChangeDark());

// function autChangeDark() {
// 	return hrDefDark.getTime() - fecha.getTime();
// }

// if(fecha.getHours() >= 7 && fecha.getHours() <= 17) {


// setTimeout(function () {
// 	if (localStorage.getItem('themeDark') === "1") {
// 		console.log("Si entra");
// 		imgLogo.src = imgLogo.src.replace(imgSch2, imgSch1);
// 		document.body.classList.toggle(darkTheme);
// 		themeButton.classList.toggle(iconTheme);
// 	}
// }, autChangeLight());

// function autChangeLight() {
// 	return hrDefLight.getTime() - fecha.getTime();
// }

// }

//End of the day function necesary to restart change theme functions
setTimeout(function () {
	localStorage.setItem('endOfDay', 1);
	window.location.reload();
	// window.onload();
}, autEndDay());

function autEndDay() {
	return hrEndDay.getTime() - fecha.getTime();
}

//Esto en dado caso que si se reinicie las funciones de cambio de tema con el settimeout
localStorage.setItem('themeDark', 0);
if (fecha.getHours() < 8) {
	imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
}

setTimeout(function () {
	console.log("Si entra al modo Light por la hora");
	if (localStorage.getItem('themeDark') === "1") {
		imgLogo.src = imgLogo.src.replace(imgSch2, imgSch1);
		document.body.classList.toggle(darkTheme);
		themeButton.classList.toggle(iconTheme);
	}
}, autChangeLight());

function autChangeLight() {
	return hrDefLight.getTime() - fecha.getTime();
}

setTimeout(function () {
	console.log("Si entra al modo Dark por la hora");
	imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	localStorage.setItem('themeDark', 1);
}, autChangeDark());

function autChangeDark() {
	return hrDefDark.getTime() - fecha.getTime();
}



// if (fecha.getHours() < 8 || fecha.getHours() > 19) {
// 	if (fecha.getMinutes() > 0) {
// 		console.log("Aplica modo oscuro");
// 		imgLogo.src = imgLogo.src.replace(imgSch1, imgSch2);
// 		document.body.classList.toggle(darkTheme);
// 		themeButton.classList.toggle(iconTheme);
// 	}
// } else if(fecha.getHours() >= 8 || fecha.getHours() <= 19) {
// 	console.log("Aplica modo light");
// 	imgLogo.src = imgLogo.src.replace(imgSch2, imgSch1);
// }


/*=============== FILTER CAR MIXITUP ===============*/
var btnFilterEco;
var btnFilterClickeado;
var spnFilterEco;
var txtFilterEco;
var txtFilterTodos = document.querySelector("#txtFilterTodos");
const linkCarActive = document.querySelectorAll('.featured__item');

const liPrueba = document.querySelectorAll('.li__item p'); //Obtiene todos los textos de los filtros

function activeCar() {
	linkCarActive.forEach(item => item.nextElementSibling.style.display = (item.className.includes("active-eco")) ? "none" : "");
	txtFilterTodos.style.display = "none";
	linkCarActive.forEach(l => l.classList.remove('active-eco'));
	this.classList.add('active-eco');
	this.nextElementSibling.style.display = "block"; //Aplica para txtFilterEco
	btnFilterClickeado = this;
}

function hoverCar() {
	// console.log(this);
	linkCarActive.forEach(item => item.nextElementSibling.style.display = (item.className.includes("active-eco")) ? "block" : "none");
	this.nextElementSibling.style.display = "block"; //Aplica para txtFilterEco
	btnFilterEco = this;
	return btnFilterEco;
}

linkCarActive.forEach(l => l.addEventListener('click', activeCar));

if (window.matchMedia("(min-width: 1025px)").matches) { // Para que no interfiera con dispositivos tactiles puesto que hover es inexistente

	linkCarActive.forEach(l => l.addEventListener('mouseover', hoverCar));

	document.body.addEventListener('mouseover', (e) => {
		if (btnFilterEco != undefined) {
			// console.log(btnFilterEco.lastElementChild);
			spnFilterEco = btnFilterEco.lastElementChild;
			txtFilterEco = btnFilterEco.nextElementSibling;
			if (e.target != btnFilterEco) {
				txtFilterEco.style.display = "none";
			}
			if (e.target == spnFilterEco) {
				// console.log("Coincide con span target");
				txtFilterEco.style.display = "block";
			}
			// console.log(btnFilterEco.className);
			if (btnFilterEco.className.includes("active-eco")) {
				// console.log("Boton activo");
				txtFilterEco.style.display = "block";

			}
		}
	});

}

//Para modificar proíedad flex grow dependiendo el contenido mostrado tblComp
let contTblComp = document.querySelector('.contTblComp');
let tblComp = document.querySelector('.tblComp');


let divCamiones = document.querySelectorAll('.camiones');
let divCamionetas = document.querySelectorAll('.camionetas');

let divTurismo = document.querySelector('.turismo');
let divElectrica = document.querySelector('.electrica');

if (window.matchMedia("(min-width: 1025px)").matches) {
	divCamionetas.forEach(c => c.querySelector('.imgEco').style.width = "100%");
	divTurismo.querySelector('.imgEco').style.width = "60%";
	divTurismo.querySelector('.brandEco').style.width = "10%";
	divElectrica.querySelector('.imgEco').style.width = "60%";
}

let btnTodos = document.querySelector("#btnTodos");
btnTodos.addEventListener('click', () => {
	contTblComp.style.flexWrap = "wrap";
	divCamiones.forEach(c => c.style.flexGrow = "1");
	// divTurismo.querySelector('img').style.width = "65%";
	divTurismo.style.flexGrow = "1";
	// divElectrica.querySelector('img').style.width = "65%";
	divElectrica.style.flexGrow = "1";
	if (window.matchMedia("(min-width: 1025px)").matches) {
		divCamionetas.forEach(c => c.querySelector('.brandEco').style.width = "20%");
		divCamionetas.forEach(c => c.querySelector('.imgEco').style.width = "100%");
		divTurismo.querySelector('.brandEco').style.width = "10%";
		divTurismo.querySelector('.imgEco').style.width = "60%";
		divElectrica.querySelector('.brandEco').style.width = "20%";
		divElectrica.querySelector('.imgEco').style.width = "60%";
	}
});

let btnCamiones = document.querySelector("#btnCamiones");
btnCamiones.addEventListener('click', () => {
	if (window.matchMedia("(max-width: 580px)").matches || window.matchMedia("(max-width: 1024px)").matches) {
		// contTblComp.style.flexWrap = "wrap";
		divCamiones.forEach(c => c.style.flexGrow = "0");
	} else {
		contTblComp.style.flexWrap = "nowrap";
		divCamiones.forEach(c => c.style.flexGrow = "0");
	}
});

let btnCamionetas = document.querySelector("#btnCamionetas");
btnCamionetas.addEventListener('click', () => {
	if (window.matchMedia("(min-width: 1025px)").matches) {
		divCamionetas.forEach(c => c.querySelector('.brandEco').style.width = "10%");
		divCamionetas.forEach(c => c.querySelector('.imgEco').style.width = "60%");
	}
});

let btnTurismo = document.querySelector('#btnTurismo');
btnTurismo.addEventListener('click', () => {
	divTurismo.style.flexGrow = "0";
	if (window.matchMedia("(min-width: 1025px)").matches) {
		divTurismo.querySelector('.brandEco').style.width = "20%";
	}
	divTurismo.querySelector('.imgEco').style.width = "100%";
});

let btnElectrica = document.querySelector('#btnElectrica');
btnElectrica.addEventListener('click', () => {
	divElectrica.style.flexGrow = "0";
	if (window.matchMedia("(min-width: 1025px)").matches) {
		divElectrica.querySelector('.brandEco').style.width = "30%";
	}
	divElectrica.querySelector('.imgEco').style.width = "100%";
});

//Función para filtrar resultados de tabla comparativa
let mixer = mixitup('.contTblComp', {
	selectors: {
		target: '.tblComp'
	},
	animation: {
		duration: 300
	}
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

// const inicioTitle1 = document.getElementById('inicioTitle1');

// const inicioTitle2 = document.getElementById('inicioTitle2');
// const inicioTexto1 = document.getElementById('inicioTexto1');

const inicioDiv1 = document.getElementById('inicioNumber1');
const inicioDiv2 = document.getElementById('inicioNumber2');
const inicioDiv3 = document.getElementById('inicioNumber3');




// const usImg1 = document.getElementById('usImg1');
// const usTitle1 = document.getElementById('usTitle1');
// const usTexto1 = document.getElementById('usTexto1');
// const usContent1 = document.getElementById('usContent1');
// const usContent2 = document.getElementById('usContent2');
// const usContent3 = document.getElementById('usContent3');

const inicioBtn1 = document.getElementById('inicioBtn1');

const servTitleEsc = document.getElementById('servTitleEsc');
const servDescEsc = document.getElementById('servDescEsc');
const servBtnEsc = document.getElementById('servBtnEsc');
const servImgEsc = document.getElementById('servImgEsc');

const servTitleCorp = document.getElementById('servTitleCorp');
const servDescCorp = document.getElementById('servDescCorp');
const servBtnCorp = document.getElementById('servBtnCorp');
const servImgCorp = document.getElementById('servImgCorp');

const servTitleTur = document.getElementById('servTitleTur');
const servDescTur = document.getElementById('servDescTur');
const servBtnTur = document.getElementById('servBtnTur');
const servImgTur = document.getElementById('servImgTur');

const inicioTitleFlota = document.getElementById('inicioTitleFlota');
const inicioDescFlota = document.getElementById('inicioDescFlota');
const inicioBtnFlota = document.getElementById('inicioBtnFlota');

const clientesTitle1 = document.getElementById('clientesTitle1');
const clientesDiv1 = document.getElementById('clientesDiv1');

const inicioTitleFamilia = document.getElementById('inicioTitleFamilia');
const inicioDescFamilia = document.getElementById('inicioDescFamilia');



// MISION VISION VALORES
// const usImgBox1 = document.getElementById('usImgBox1');
// const usImgTitle1 = document.getElementById('usImgTitle1');
// const usImgDesc1 = document.getElementById('usImgDesc1');

// const usImgBox2 = document.getElementById('usImgBox2');
// const usImgTitle2 = document.getElementById('usImgTitle2');
// const usImgDesc2 = document.getElementById('usImgDesc2');

// const usImgBox3 = document.getElementById('usImgBox3');
// const usImgTitle3 = document.getElementById('usImgTitle3');
// const usImgDesc3 = document.getElementById('usImgDesc3');




// const nosotrosImg1 = document.getElementById('nosotrosImg1');
// const nosotrosDiv1 = document.getElementById('nosotrosDiv1');


// const serviciosDiv1 = document.getElementById('serviciosDiv1');


// const contactoImg1 = document.getElementById('contactoImg1');  
// const contactoDiv1 = document.getElementById('contactoDiv1');

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
		// console.log(entrada.target.id);
		if (entrada.isIntersecting) {
			entrada.target.classList.add('visible');
			if (entrada.target.id === "inicioNumber3") {
				/*=============== COUNTER ANIMATION ===============*/
				const counters = document.querySelectorAll('.counter span.number');
				console.log(counters);
				const speed = 200;

				counters.forEach(counter => {
					const updateCounter = () => {
						const tar_get = +counter.getAttribute('data-counter');
						const num = +counter.innerText;
						const increment = tar_get / speed;

						if (num < tar_get) {
							counter.innerText = num + increment;
							setTimeout(updateCounter, 10);
						} else {
							num.innerText = tar_get;
						}
					}
					updateCounter();
				});
			}
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

// observador.observe(inicioTitle1);

// observador.observe(inicioTitle2);
// observador.observe(inicioTexto1);


// observador.observe(imgBacklog1);
// observador.observe(imgBacklog2);

// observador.observe(usImg1);
// observador.observe(usTitle1);
// observador.observe(usTexto1);
// observador.observe(usContent1);
// observador.observe(usContent2);
// observador.observe(usContent3);
observador.observe(inicioBtn1);


observador.observe(servTitleEsc);
observador.observe(servDescEsc);
observador.observe(servBtnEsc);
observador.observe(servImgEsc);

observador.observe(servTitleCorp);
observador.observe(servDescCorp);
observador.observe(servBtnCorp);
observador.observe(servImgCorp);

observador.observe(servTitleTur);
observador.observe(servDescTur);
observador.observe(servBtnTur);
observador.observe(servImgTur);

observador.observe(inicioTitleFlota);
observador.observe(inicioDescFlota);
observador.observe(inicioBtnFlota);

observador.observe(clientesTitle1);
observador.observe(clientesDiv1);


observador.observe(inicioTitleFamilia);
observador.observe(inicioDescFamilia);
observador.observe(inicioDiv1);
observador.observe(inicioDiv2);
observador.observe(inicioDiv3);

// SECCION NOSOTROS


// observador.observe(usImgBox1);
// observador.observe(usImgTitle1);
// observador.observe(usImgDesc1);
// observador.observe(usImgBox2);
// observador.observe(usImgTitle2);
// observador.observe(usImgDesc2);
// observador.observe(usImgBox3);
// observador.observe(usImgTitle3);
// observador.observe(usImgDesc3);

// observador.observe(nosotrosImg1);
// observador.observe(nosotrosDiv1);

// observador.observe(serviciosDiv1);

// SECCION CONTACTO

// observador.observe(contactoImg1);
// observador.observe(contactoDiv1);

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

//SCROLL REVEAL FOR BACKLOG

const imgBacklog1 = document.querySelector(".firstImgBacklog");
const txtImgBacklog1 = document.querySelector("#firstTextImgBackLog");
const imgBacklog2 = document.querySelector(".secondImgBacklog");
const txtImgBacklog2 = document.querySelector("#secondTextImgBackLog");
const imgBackLog3 = document.querySelector(".thirdImgBacklog");
const txtImgBacklog3 = document.querySelector("#thirdTextImgBackLog");

const cargarImgBackLog = (entries, scrollBackLog) => {
	entries.forEach((entrie) => {

		if (entrie.isIntersecting) {
			entrie.target.classList.add('visible');
			// if (entrie.target.id === "firstTextImgBackLog") {
			// 	entrie.target.classList.remove('visible');
			// 	console.log("Si entro");
			// 	entrie.target.classList.add('visibleBackLog');
			// }
		}
		else {
			entrie.target.classList.remove('visible');
		}



		// if(entrie.isIntersecting){			
		// 	if (entrie.target.id === "firstTextImgBackLog") {
		// 		entrie.target.classList.add('visibleBackLog');
		// 	}
		// } else {
		// 	entrie.target.classList.remove('visibleBackLog');
		// }

		// if(entrie.isIntersecting){			
		// 	entrie.target.classList.add('visibleBackLog');
		// } else {
		// 	entrie.target.classList.remove('visibleBackLog');
		// }



	});
}

const scrollBackLog = new IntersectionObserver(cargarImgBackLog, {
	root: null,
	rootMargin: '0px 0px -50px 0px',
	// rootMargin: '200px 0px 50px 0px',
	threshold: 0.10
});

scrollBackLog.observe(imgBacklog1);
scrollBackLog.observe(txtImgBacklog1);
scrollBackLog.observe(imgBacklog2);
scrollBackLog.observe(txtImgBacklog2);
scrollBackLog.observe(imgBackLog3);
scrollBackLog.observe(txtImgBacklog3);

/** DISABLE SCREEN IMPRESSION OR PDF EXPORT WITH (CTRL+P) & DISABLE SCREENCUTS (CTRL+SHIFT+S)**/
document.addEventListener('keydown', (e) => {

	if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
		alert('ERROR This section doesnt allow impression or PDF export \nDont try it again or your access will be denied and reported');

		e.preventDefault();
	}

	else if (e.metaKey && e.shiftKey) {
		alert('SCREENCUTS DETECTED! \nDont try it again or your access will be denied and reported');

	}

	else if (e.ctrlKey && e.key == 's' || e.ctrlKey && e.key == 'S') {
		alert('ERROR This Website cant be downloaded \nDont try it again or your access will be denied and reported');

		e.preventDefault();
	}

	else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') {
		alert('ERROR This Website doesnt allow copy \nDont try it again or your access will be denied and reported');

		e.preventDefault();
	}

	else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') {
		alert('ERROR This Website doesnt allow cut \nDont try it again or your access will be denied and reported');

		e.preventDefault();
	}

	else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') {
		alert('ERROR This Website doesnt allow paste \nDont try it again or your access will be denied and reported');

		e.preventDefault();
	}

});

