function calcularIMC(){
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	if(peso == "" || altura == ""){
 		alert("Escribe un número");
 	}else{
		alert("Tu IMC es de : " + (parseInt(peso / Math.pow(altura,2))));
	}
}