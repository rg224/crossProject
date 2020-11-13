let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let text_area = document.getElementById('text_area');
let send = document.getElementById('send');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

mic.addEventListener("click", function(){

	recognition.start();
	console.log("Activated");
})

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;

    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

send.addEventListener("click", function(){

	if (text_area.value != ''){
		showusermsg(text_area.value);
		text_area.value = '';
	}
	// console.log(text_area.value);
})

function chatbotvoice(message) {
	const speech = new SpeechSynthesisUtterance();
	speech.text = "Hello, I am Cross, how are you, i am good. What about you!"; // for now this message from chatbot is fixed
	window.speechSynthesis.speak(speech);
	showchatbotmsg(speech.text);
	// chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function(e){
	let resultindex = e.resultIndex;
	let transcript = e.results[resultindex][0].transcript
	// chatareamain.appendChild(showusermsg(transcript));
	showusermsg(transcript);
	chatbotvoice(transcript);

	// console.log(transcript);
}