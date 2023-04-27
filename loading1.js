var animation = 0;   //переменная счетчика

var meowth0 = document.getElementById("animated-image");  //переменной meoth крепится ID
var meowth1 = document.getElementById("animated-image1");
var meowth2 = document.getElementById("animated-image2");
var meowth3 = document.getElementById("animated-image3");

function animateFrame(){
    
    if (animation == 0) {
        meowth3.style.display = "none";  //прошлую картинку обнуляет 
        meowth0.style.display = "block"; //проявляется новыя картинка
        animation++;   //счетчик циклов, прибавляет 1
        return 0;   //ломает функцию 
        
    }
    else if (animation == 1) {
        meowth0.style.display = "none";
        meowth1.style.display = "block";
        animation++;
        return 0;
        
    }
    else if (animation == 2) {
        meowth1.style.display = "none";
        meowth2.style.display = "block";
        animation++;
        return 0;
    }
    else if (animation == 3) {
        meowth2.style.display = "none";
        meowth3.style.display = "block";
        animation = 0;  //обнуоение функции
        return 0;
    }


}

let animationInterval = setInterval(animateFrame, 100); //интервал смены картинок