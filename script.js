var typingText = document.querySelector('.text2');
var myArray = 
["Web Developer", "Student at Penn", "Data Analyst", "Passionate Learner", "Blogger"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){ //scroll over 80 px
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

function hideAllSections() {
	document.querySelector('.front-end').classList.remove('active');
	document.querySelector('.front-end').classList.add('hidden');
	document.querySelector('.back-end').classList.remove('active');
	document.querySelector('.back-end').classList.add('hidden');
	document.querySelector('.Other').classList.remove('active');
	document.querySelector('.Other').classList.add('hidden');
}

function FrontClick() {
	hideAllSections();
	document.querySelector('.front-end').classList.remove('hidden');
	document.querySelector('.front-end').classList.add('active');
}

function BackClick() {
	hideAllSections();
	document.querySelector('.back-end').classList.remove('hidden');
	document.querySelector('.back-end').classList.add('active');
}

function OtherClick() {
	hideAllSections();
	document.querySelector('.Other').classList.remove('hidden');
	document.querySelector('.Other').classList.add('active');
}


// 當頁面加載完成時，預設顯示 Front-end
document.addEventListener('DOMContentLoaded', function() {
	// 設置進度條
	const bars = document.querySelectorAll('.bar-front, .bar-back, .bar-other');
	bars.forEach(bar => {
		const percent = bar.getAttribute('data-percent');
		bar.style.width = percent;
	});

	// 預設顯示 Front-end
	document.querySelector('.front-end').classList.remove('hidden');
	document.querySelector('.front-end').classList.add('active');
});