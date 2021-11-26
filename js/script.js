"use strict"

$(document).ready(function(){
	$('.footer__title').click(function(event){
		$(this).toggleClass('show').next().slideToggle(300);
	});
});

new Swiper('.our__content',{

	pagination: {
		el: '.swiper-pagination',
		clickable:true,
	},

	slidesPerView: 3,
	autoHeight:true,
	autoplay:true,
	loop:true,
	effect:'slide',
	spaceBetween:31,

	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		680:{
			slidesPerView: 2,
			spaceBetween:20,
		},
		992:{
			slidesPerView: 3,
		}
	},
});

//===================================================================================================

// Меню бургер на чистом JS =======================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//====================================================================================

//ibg photo ======================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//=====================================================================================================

// Прокрутка при клике ====================================================================

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//===========================================================================================
