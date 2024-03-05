document.addEventListener('DOMContentLoaded', function() {
    var text = "let array = [1,2,3,4,5,6,7,8,9] grfgfgrvfhehhfifh huhfuehfhueh jfyurehfuhu";
    var speed = 95; 
    var index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});