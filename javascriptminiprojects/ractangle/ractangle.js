var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectangalLocation = rect.getBoundingClientRect();
    var insidRectValue =details.clientX - rectangalLocation.left;

    if(insidRectValue < rectangalLocation.width/2){
        var grayColor = gsap.utils.mapRange(0,
            rectangalLocation.width/2, 255,
            0,
            insidRectValue
            );
            gsap.to(rect,{
                backgroundColor: `rgb(${grayColor},88,88)`,
                ease: Power4,
            });
    }else{
        var greenColor = gsap.utils.mapRange(

            rectangalLocation.width / 2 ,
            rectangalLocation.width,
             0,
            255,
            insidRectValue
            );
            gsap.to(rect,{
                backgroundColor: `rgb(0,128,${greenColor})`,
                ease: Power4,
            });
    }
})

rect.addEventListener("mouseleave" , function(){
    gsap.to(rect, {
        backgroundColor: "white"
    })
})