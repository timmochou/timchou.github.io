var typingText = document.querySelector('.text2');
var myArray = 
["Data Analyst", "Passionate Learner", "Sports Enthusiast"];
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

// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', function() {
	// 获取所有时间线导航按钮
	const timelineButtons = document.querySelectorAll('.timeline-nav-btn');
	
	// 为每个按钮添加点击事件监听器
	timelineButtons.forEach(button => {
		button.addEventListener('click', function() {
			// 移除所有按钮的 active 类
			timelineButtons.forEach(btn => btn.classList.remove('active'));
			
			// 为当前点击的按钮添加 active 类
			this.classList.add('active');
			
			// 获取当前按钮对应的年份
			const year = this.getAttribute('data-year');
			
			// 获取所有内容项
			const contentItems = document.querySelectorAll('.timeline-content-item');
			
			// 隐藏所有内容项
			contentItems.forEach(item => item.classList.remove('active'));
			
			// 显示对应年份的内容项
			const targetContent = document.querySelector(`.timeline-content-item[data-year="${year}"]`);
			if (targetContent) {
				targetContent.classList.add('active');
			}
		});
	});
});
// otehr experience section started
const buttons = document.querySelectorAll('.activity-btn');
  const timelineItems = document.querySelectorAll('.horizontal-timeline-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 先移除所有按鈕的active
      buttons.forEach(b => b.classList.remove('active'));

      // 2. 讓當前按下的按鈕變active
      btn.classList.add('active');

      // 3. 找到 data-activity，顯示對應的timeline item
      const activityType = btn.getAttribute('data-activity');

      // 4. 隱藏全部timeline-item
      timelineItems.forEach(item => {
        item.classList.remove('active');
        // 這裡也可以選擇 display:none; 只是我們在CSS用了 .active 切換 
      });

      // 5. 顯示與按鈕對應的timeline-item
      const targetItem = document.querySelector(`.horizontal-timeline-item[data-activity="${activityType}"]`);
      if (targetItem) {
        targetItem.classList.add('active');
      }
    });
  });