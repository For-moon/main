$(document).ready(function () {
	$(".container")
	.mouseenter(function () {
		$(".card").stop().animate(
			{top: "-90px"},
			"slow"
		);
	})
	.mouseleave(function () {
		$(".card").stop().animate(
			{top: 0},
			"slow"
		);
	});
});

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
		}, 3000)
	});
});