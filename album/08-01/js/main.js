var pages = document.getElementsByClassName('page');
const book = document.querySelector('.book');
var loading_div = document.getElementById('loading');
var loading_css = document.getElementById('loading-css');
var audio = document.getElementById("music");

function Book(Check, Class) {
	if (Check) book.classList.add(Class);
	else book.classList.remove(Class);
}
function loading() {
	loading_div.classList.add('loading-end');
	setTimeout(() => {
		loading_div.style.display = "none";
		loading_css.parentNode.removeChild(loading_css);
	}, 1500);
}
function resizeFont() {
	const imgContainers = document.querySelectorAll('div.img');
	imgContainers.forEach(container => {
		const children = container.querySelectorAll('p.day');
		children.forEach(child => {
			//child.style.fontSize = container.offsetWidth*0.043 + 'px';
			child.style.setProperty('font-size', 7 + 'px', 'important');
		});
	});
}

for (var i = 0; i < pages.length; i++) {
	var page = pages[i];
	if (i % 2 === 0)
		page.style.zIndex = (pages.length - i);
}

//window.onload = function() {resizeFont();};
window.onload = function() {
	//resizeFont();
	if (loading_css) setTimeout(loading(), 1500);
	for (var i = 0; i < pages.length; i++) {
		pages[i].pageNum = i + 1;
		pages[i].onclick = function() {
			if (this.pageNum % 2 === 0) {
				this.classList.remove('flipped');
				if (this.previousElementSibling)
					this.previousElementSibling.classList.remove('flipped');
			} else {
				this.classList.add('flipped');
				if (this.nextElementSibling)
					this.nextElementSibling.classList.add('flipped');
			}
			audio.play();
			if (this.pageNum === 1) Book(true, 'begin');
			else if (this.pageNum === 2) Book(false, 'begin');
			else if (this.pageNum === pages.length - 1) Book(true, 'end');
			else if (this.pageNum === pages.length) Book(false, 'end');
		}
	}
}