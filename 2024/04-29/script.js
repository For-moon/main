var content = [
	[
		"Gửi vk yêu, người mà ck yêu nhất trên thế gian ❤️❤️.",
		"Ck làm cái này vì ck có đôi lời muốn nói với vk yêu."
	], [
		"1.Lời cảm ơn từ ck",
		"Vk ơi, những tháng ngày qua, vk đã luôn là một phần không thể thiếu trong cuộc sống của ck. Vk là người đã đem lại cho ck nhiều niềm vui, hạnh phúc và sự ấm áp không ngừng nghỉ. Ck muốn dành những dòng này để bày tỏ lòng biết ơn sâu sắc đến vk vì tất cả những điều tuyệt vời mà vk đã mang lại cho cuộc đời ck. Vk là người đã cho ck biết được ý nghĩa thực sự của tình yêu và sự quan tâm. Ck cảm ơn vk rất nhiều."
	], [
		"2.Lời xin lỗi từ ck",
		"Vk ơi, ck xin lỗi về những lúc đã làm vk buồn. Ck thực sự hối hận về những hành động và lời nói không đúng đắn của mình. Ck nhận ra rằng ck đã gây ra sự đau lòng và phiền muộn cho vk, và điều đó làm ck cảm thấy rất xấu hổ và dằn vặt. Ck biết rằng tình yêu của chúng ta cần được bảo vệ và chăm sóc, và ck sẽ cố gắng hết sức để không gây ra những lỗi lầm như vậy nữa. Mong vk có thể tha thứ cho ck và không nghĩ đến những thứ mà ck chắc chắn không bao giờ tái phạm nữa. Ck yêu vk rất rất nhiều."
	], [
		"3.Lời trải lòng từ ck",
		"Vk yêu ơi, ck đã suy nghĩ và đã biết được chính xác mối tình đầu của ck chính là vk yêu, ck chắc chắn điều này bởi vì ck bắt đầu cảm thấy thật sự yêu ai đó khi vk bước vào cuộc đời của ck. Ck tin rằng hiện tại chính là giai đoạn khó khăn trong tình yêu, chỉ cần vượt qua là nhất định chúng ta sẽ hạnh phúc đến hết đời khi ở bên cạnh nhau. Cảm ơn vk yêu vì đã xuất hiện trong cuộc đời của ck, vì đã cho ck cơ hội, vì tất cả mọi thứ. Ck yêu vk, và sẽ mãi mãi yêu vk, ck nhất định sẽ đem đến hạnh phúc đến hết đời cho vk yêu."
	], [
		"4.Lời iuu vk 🥰🥰",
		"Vk iu của ck ơi, mỗi sáng thức dậy, trái tim ck lại rộn ràng vì sắp được gặp vk iu ở trường 💓. Vk iu như một vầng trăng sáng mang lại cho ck biết bao nhiêu hi vọng. Ck muốn nói với vk iu rằng từ khi có vk iu, cuộc sống của ck đã trở nên đầy đủ và ý nghĩa hơn bao giờ hết. Vk iu là người ck yêu thương và trân trọng nhất, là người mà ck muốn yêu thương, che chở cả đời. Những cử chỉ nhỏ nhưng ý nghĩa, những lời nói ngọt ngào và sự quan tâm ân cần của vk iu luôn làm cho ck cảm thấy được yêu thương và quan trọng. Dù có bao nhiêu khó khăn và thử thách, ck tin rằng chúng ta sẽ vượt qua mọi điều. Bởi vì vk iu là nguồn động viên và là nguồn sức mạnh cực kỳ lớn của ck 💪. Hãy tin rằng ck yêu vk iu không chỉ là ngày hôm nay mà còn mãi mãi trong tương lai ❤️. Ck sẽ ở bên cạnh vk iu, sẽ là điểm tựa vững chắc cho vk iu và sẽ mãi yêu vk  hơn bất cứ điều gì trên thế giới này ❤️. Hy vọng điều này sẽ làm cho vk iu cảm thấy hạnh phúc và ấm áp!"
	]
];

var button_b = document.getElementById("back");
var button_n = document.getElementById("next");
var page = 0;
write ();

function write () {
	document.getElementById("h").textContent = "";
	document.getElementById("b").textContent = "";
	var idx1 = 0;
	var idx2 = 0;
	var output = "";
	var add = "";
	var textArray = content[page][0].split("");
	var container = document.getElementById("h");
	function displayText() {
		output += add + textArray[idx1];
		container.textContent = output;
		idx1++;
		if (idx1 === textArray.length) {
			if (idx2 === 1) {
				if (page != 0) {button_b.style.display = "inline";}
				button_n.style.display = "inline";
				clearInterval(intervalId);
			} else {
				idx2++;
				idx1 = 0;
				output = "";
				add = " ";
				textArray = content[page][1].split(" ");
				container = document.getElementById("b");
			}
		}
	}
	var intervalId = setInterval(displayText, 10);
}

button_b.addEventListener("click", function () {
	page--;
	button_b.style.display = "none";
	button_n.style.display = "none";
	write ();
});

button_n.addEventListener("click", function () {
	if (page === 4) {
		window.location.href = 'qua.html';
	} else {
		page++;
		button_b.style.display = "none";
		button_n.style.display = "none";
		write ();
	}
});