

document.addEventListener('DOMContentLoaded', (event) =>{
    
   

    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');

    console.log('DOM fully loaded and parsed');
    
});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(getRandomColor());

var button = document.getElementById('change-color-btn');

button.addEventListener('click', function() {
    
    var colorBox = document.getElementById('color-box');
    
   
    colorBox.style.backgroundColor = getRandomColor();
});