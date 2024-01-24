const count = document.getElementById('count');

const btn1 = document.getElementById('btn1')

const btn2 = document.getElementById('btn2')

const btn3 = document.getElementById('btn3')

let counter = 0;

btn1.addEventListener("click" ,function(){
    counter++;
    count.innerHTML = counter;
})

btn2.addEventListener("click", function(){
    counter = 0;
    count.innerHTML = counter;
})

btn3.addEventListener("click", function(){
    counter--;
    count.innerHTML = counter;
})

