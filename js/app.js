var clair = document.querySelector('div.clair');
var margarita = document.querySelector('div .margarita');

clair.addEventListener('mouseover', function(){
    clair.firstElementChild.classList.add('showTitle');
});
clair.addEventListener('mouseout', function(){
    clair.firstElementChild.classList.remove('showTitle');
});
margarita.addEventListener('mouseover', function(){
    margarita.firstElementChild.classList.add('showTitle');
});
margarita.addEventListener('mouseout', function(){
    margarita.firstElementChild.classList.remove('showTitle');
});


var next = document.getElementById('prevPicture');
var prev = document.getElementById('nextPicture');
var list = document.querySelectorAll('.slider li');
var counter = 0;

list[counter].classList.add('visible');

next.addEventListener('click', function () {
    list[counter].classList.remove('visible');
    if (counter == list.length -1) {
        counter = -1;
    }
    counter++;

    list[counter].classList.add('visible');
});
prev.addEventListener('click', function () {
    list[counter].classList.remove('visible');
    if (counter <= 0) {
        counter = list.length;
    }
    counter--;
    console.log(counter);
    list[counter].classList.add('visible');

}, false);