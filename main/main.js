let arrBody, arrMenu, arrCard;
let selectedId, selectedDiv;
let link, folder, file;

function Load() {
	selectedId = document.querySelector('#album');
	selectedDiv = document.querySelector('.album');
	selectedId.classList.add('selected');
	selectedDiv.classList.remove('remove');
	folder = "album";
}

function Selection () {
	arrMenu.forEach(function(e) {
		e.onclick = function() {
			selectedId.classList.remove('selected');
			selectedId = e;
			selectedId.classList.add('selected');

			selectedDiv.classList.add('remove');
			selectedDiv = document.querySelector('.' + e.id);
			selectedDiv.classList.remove('remove');

			folder = e.id.replace('_', '');
		};
	});
}

function Click() {
	arrCard.forEach(function(card) {
		card.onclick = function() {
			file = card.classList[1].substr(1, 5);
			link = "../" + folder + "/" + file + "/index.html"
			window.location.href = link;
		};
	});
}

function Effect() {
	const allElements = document.querySelectorAll("*");
	allElements.forEach(element => {
		element.addEventListener("mousemove", (e) => {
			e.stopPropagation();
			const xPosition = e.offsetX;
			const yPosition = e.offsetY;
			const spanElement = document.createElement("span");
			spanElement.style.left = xPosition + "px";
			spanElement.style.top = yPosition + "px";
			const size = (Math.random() * 100)/50 + 25;
			spanElement.style.width = size + "px";
			spanElement.style.height = size + "px";
			element.appendChild(spanElement);
			setTimeout(() => {
				spanElement.remove();
			}, 1000)
		});
	});
}

function InitializeVariables() {
	arrBody = document.querySelectorAll('.body');
	arrMenu = document.querySelectorAll('.menu');
	arrCard = document.querySelectorAll('.card');
}

document.addEventListener('DOMContentLoaded', function () {
	InitializeVariables();
	Load();
	Selection();
	Click();
	Effect();
});
