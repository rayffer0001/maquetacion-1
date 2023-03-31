// valores que no cambian se llaman const
const menuBtn = document.getElementById('menuBtn');

//clases lementos id los atributos son selectors
const aside = document.querySelector('aside');

//escuchar un Evento cuando le den 
//agregar un escuchador de eventos, eventos click
menuBtn.addEventListener('click', function(){
    aside.classList.toggle('active');
})