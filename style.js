document.addEventListener("DOMContentLoaded", function(event) { 
	const burger=document.querySelector('.burger');
	burger.addEventListener('click', function(){
		document.querySelector('.header__menu').classList.toggle('active');
		document.querySelector('html').classList.toggle('lock');
		burger.classList.toggle('active');
	})
	const headerLinks = document.querySelectorAll('.header__link');
	headerLinks.forEach((item, index) => item.addEventListener('click', function(e){
		e.preventDefault();
		document.querySelector('.header__menu').classList.remove('active');
		document.querySelector('html').classList.remove('lock');
		burger.classList.remove('active');
		switch (index){
			case 0:
			scrollOffset('info')
			break;
			case 1:
			scrollOffset('cypher')
			break;
			case 2:
			scrollOffset('author')
			break;

		}
	}))

	function scrollOffset(elem){
		var element = document.getElementById(`${elem}`);
		var headerOffset = 90;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}



//styles for the whole page
const aboutItems = document.querySelectorAll('.about__item');
let aboutItemsLength=[];
let aboutItemsBool=[false,false,false];
const aboutItemsBtn = document.querySelectorAll('.about__item-closer');
init();
window.addEventListener('resize',init)
aboutItemsBtn.forEach((item,index) => item.addEventListener('click', function(){
	if (!aboutItemsBool[index]){
		aboutItems[index].style.maxHeight=`${aboutItemsLength[index]}px`
		item.classList.add('active');
		aboutItemsBool[index]=true;
	}
	else{
		aboutItems[index].style.maxHeight=`${90}px`
		item.classList.remove('active');
		aboutItemsBool[index]=false;
	}
}))

//cypher slider
const slider = document.querySelector('.cypher__block-slider');
const sliderBtns = document.querySelectorAll('.cypher__block-btn');
sliderBtns.forEach(i => i.addEventListener('click', function(){
	slider.classList.toggle('active');
}));


function init(){
	//console.log(aboutItems[0].children[0])
	aboutItems.forEach(i =>{
		let height;
		height = i.children[0].clientHeight + i.children[1].clientHeight;
		aboutItemsLength.push(height+120);
		console.log(i.clientHeight)
		i.style.maxHeight='90px';
		//console.log(i.clientHeight)
	})
	aboutItemsBtn.forEach(i => i.classList.remove('active'))
}
});