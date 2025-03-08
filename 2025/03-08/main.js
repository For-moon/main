function typeWriter(text, element) {
	let index = 0;
	let line = '';
	let delay = 20;
	function typeNextChar() {
		if (index < text.length) {
			let char = text[index];
			line += char;
			element.innerHTML = line + (index != text.length - 1 ? '_': '');
			if (char === ' ') delay = 50;
			else if (char === ',') delay = 200;
			else if (char === '.') delay = 400;
			else if (char === '\n') delay = 800;
			else delay = 20;
			index++;
			setTimeout(typeNextChar, delay);
		} else {
			setTimeout(() => {element.innerHTML += '<br>';}, 250);
		}
	}
	typeNextChar();
}

var paragraph = "Tặng eb iu của ck ngày 8/3.\nNgày hum nay ck tặng eb iu của ck những bông hoa theo đúng màu eb iu thích nè. Ba bông hoa là gia đình 3 người của chúng ta trong tương lai ó. Chúc eb iu của ck 8/3 vui vẻ, hạnh phúc. Chúc eb iu của ck ngày càng xinh đẹp và đạt được nhiều thành công nha 🫶, chúc eb iu luôn hạnh phúc và luôn nở nụ cười tỏa nắng cho ck say đắm nho 🤭\nCk yêu eb iu của ck nhất trên đời 😘 🥰 ";

onload = () => {
	const c = setTimeout(() => {
		document.body.classList.remove("not-loaded");
		clearTimeout(c);
	}, 500);
	const d = setTimeout(function() {
		typeWriter(paragraph, document.querySelector('.happy-woman-day'));
		clearTimeout(d);
	}, 1000);
};
