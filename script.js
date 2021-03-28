function start() {
	var sel = document.getElementsByTagName("select");
	sel[0].setAttribute("onchange", "change_car(this)");
	
	var div = document.getElementById("div");
	div.style.width = "700px";
	div.style.textAlign = "center";
	div.style.color = "white"; 
	div.style.margin = "0px auto";
	div.style.fontFamily = "arial";
	div.style.display = "none";
	
	var par = document.createElement("p");
	par.style.borderRadius = "10px";
    par.style.fontSize = "24px";
	par.style.backgroundColor = "rgba(54,54,54,0.7)";
	par.style.margin = "0px auto";
	par.style.border = "1px solid black";
	par.setAttribute("id","paragraf");
	div.appendChild(par);
	
	var images = document.getElementById("images");
	var img = document.createElement("img");
	img.setAttribute("id","one");
	img.setAttribute("src","img/img5.jpg");
	images.appendChild(img);
}
function change_car(car) {
	var text = car.value;
	var write = document.getElementById("paragraf");
	write.innerHTML = "This is "+text;
	
	if(div.style.display == "none") {
		div.style.display = "block";
	}
	
	var img = document.getElementById("one");
	var niz = ["BMW", "AUDI", "MERCEDES", "PORCSHE", "JAGUAR"];
		if(text === niz[0]) {
			img.removeAttribute("src");
			img.setAttribute("src","img/img0.jpg");
			} else if(text === niz[1]) {
			img.removeAttribute("src");
			img.setAttribute("src","img/img1.jpg");
		} else if(text === niz[2]) {
			img.removeAttribute("src");
			img.setAttribute("src","img/img2.jpg");
		} else if(text === niz[3]) {
			img.removeAttribute("src");
			img.setAttribute("src","img/img3.jpg");
		} else if(text === niz[4]) {
			img.removeAttribute("src");
			img.setAttribute("src","img/img4.jpg");
		}
}