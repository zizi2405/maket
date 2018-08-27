(function () {
  
    var dots = document.querySelectorAll('.main__dots');
    var img = document.querySelectorAll('.main__img');
    var index;
    var i;

    for( i=0; i< dots.length; i++) {
        dots[i].addEventListener('click', move);  
    }

    function move(e){
        index = e.target.getAttribute('data-target');
        for(let i=0; i< dots.length; i++) {
            dots[i].classList.remove('main__dots_active'); 
            img[i].style.opacity = "0";
        }
        this.classList.add('main__dots_active');  
        console.log(index)
        img[index].style.opacity = "1";
    }

}());

(function () {

   
    var mobMenu = document.querySelector('.header__mob-menu');
    var nav = document.querySelector('nav');


    mobMenu.addEventListener('click', showMenu);

    function showMenu(){
        if(nav.classList.contains('nav_active')){
            nav.classList.remove('nav_active');
        }else {
            nav.classList.add('nav_active');
        }
    }

}());

(function () {
        var item = document.querySelectorAll('.textaria__bars_box');
        var hideText = document.querySelectorAll('.textaria__hide-text');
        var texariaH = document.querySelectorAll('.textaria__bars_box h3');
        var index;
        var i;
        var texariaP = document.querySelector('.textaria__hide-text p');
        var heightP = getComputedStyle(texariaP);

        item[0].classList.add('textaria__bars_box_active');
        hideText[0].style.height = heightP.height;
        texariaH[0].style.color = "white";

        for(i =0; i < item.length; i++){
            item[i].addEventListener('click', showText);
        }

        function showText(e) {
            index = this.dataset.target;

            for(i =0; i < item.length; i++){
            hideText[i].style.height = "0";
            item[i].classList.remove('textaria__bars_box_active');
            texariaH[i].style.color = "";
            }

          
            this.classList.add('textaria__bars_box_active');
            hideText[index].style.height = heightP.height;
            texariaH[index].style.color = "white";
    
          }
     
}());
