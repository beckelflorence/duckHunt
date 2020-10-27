

var container = document.querySelector('#container'); 
var mDuck = document.querySelector('#duck'); 
var vitesse = 60; //indique la vitesse 
mDuck.style.top = '0px'; 
mDuck.style.left = '0px'; 


document.addEventListener('keydown', (event) => { // pour le déplacement - clavier
    var top = parseInt(mDuck.style.top); 
    var left = parseInt(mDuck.style.left); 
  
    if (event.key == 'ArrowRight') {
      if(left < 720) {
        left += vitesse; 
      }
    }
    if (event.key == 'ArrowLeft') { 
      if(left > 0) {
        left -= vitesse; 
      }
    }
    if (event.key == 'ArrowDown') { 
      if(top < 420) {
        top += vitesse; 
      }
    }
    if (event.key == 'ArrowUp') {
      if (top > 0) {
        top -= vitesse;
      }
    }
  
    mDuck.style.left = left + 'px';
    mDuck.style.top = top + 'px';
  });



var canard = document.querySelector('.canardVolant'); 
var hunterP = document.querySelector('.ScoreDuChasseur');
var duckP = document.querySelector('.ScoreDuCanard');
var time = document.querySelector('.TempsEcoule');



var duckScore = 0; 
var hunterScore = 0;
var temps = 0;

var Minuteur = setInterval(ajoutTemps, 1000); // pour le temps 
var pointplus= setInterval(ajoutPDuck, 10000); 
var timeOut = setTimeout(finDuJeu, 5000); 




function ajoutPHunt(){ //points du chasseur
    hunterScore++;
    hunterP.innerText = hunterScore ;
}
canard.addEventListener('click', ajoutPHunt);



function ajoutPDuck(){ //points du canard
    duckScore++; 
    duckP.innerText = duckScore;
  
}



function ajoutTemps() { //défilement du temps
    temps++;
    time.innerText = temps;
}


function finDuJeu() {
    clearInterval(Minuteur); // arrête le timer
    clearInterval(pointplus); 
    canard.removeEventListener('click', ajoutPHunt);



var result = document.querySelector('.resultat');
var resultat = "";

if (duckScore > hunterScore ) {
  resultat = "DUCK WINS";
}if (duckScore < hunterScore) {
  resultat = "HUNT WINS";
}if (duckScore == hunterScore) {
  resultat = "EQUALITY";
}

result.innerText = resultat;

}





