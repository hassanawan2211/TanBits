var i =0;
var images = [];
var time = 5000;

images[0] = "./pic1.jpg";
images[1] = "./p2.jpg";
images[2] = "./p3.jpg";
images[3] = "./p4.jpg";
images[4] = "./p5.jpg";

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
     i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg" , time)
}

window.onclick = changeImg;
