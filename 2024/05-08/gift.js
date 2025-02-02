var text = "                            My baby love you so much forever you and I !!! I love you oh I love you so much forever you and I.";
var textArray = text.split("");
var button = document.getElementById("start");
button.addEventListener("click", function () {
	button.style.display = "none";
	var audio = document.getElementById("music");
	audio.play();
	var idx = 0;
	var output = "";
	function displayText() {
		var container = document.getElementById("textContainer");
		output += textArray[idx];
		container.textContent = output;
		idx++;
		if (idx >= textArray.length) {
			clearInterval(intervalId);
		}
	}
	var intervalId = setInterval(displayText, 100);
});