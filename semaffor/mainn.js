function semafor(){ 

var boja = document.getElementsByClassName('boja');
  boja[0].style.background = 'red';
  boja[1].style.background = 'gray';
  boja[2].style.background = 'gray';
  
  function changeToYellow(){

	boja[1].style.background = 'yellow';
	
  }
  function changeToGreen(){
     boja[0].style.background = 'gray';
     boja[1].style.background = 'gray';
     boja[2].style.background = 'green';
	  
  }
var x = setTimeout(changeToYellow, 4000);
var y = setTimeout(changeToGreen, 9000);
var start = setInterval(semafor,14000);

}
semafor();
