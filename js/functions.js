function showstuff(boxid){
	document.getElementById('gram1').style.display="none";
	document.getElementById('gram2').style.display="none";
	document.getElementById('gram3').style.display="none";
	document.getElementById('gram4').style.display="none";
	document.getElementById('gram5').style.display="none";
	document.getElementById('gram6').style.display="none";
	document.getElementById('gram7').style.display="none";
	document.getElementById(boxid).style.display="inline-block";
}

function hidestuff(boxid){
   document.getElementById(boxid).style.display="none";
}

