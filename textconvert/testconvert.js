let voice = new SpeechSynthesisUtterance();


let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    voice.voice = voices[0];
    console.log("error")

    voices.forEach((voiceeee, i) => (voiceSelect.options[i]) = new options(voiceeee.name, i))

};
document.querySelector("button").addEventListener("click", ()=>{
    voice.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(voice);
})





 


 
