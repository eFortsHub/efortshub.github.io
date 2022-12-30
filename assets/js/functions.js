

window.onresize = function(e){
	console.log(window.innerWidth);
	if(window.innerWidth>=860){
		openMenu();
	}else{
		closeMenu();
	}
};



let openMenu = () => {
	isOpen = true
	menu.style.transform = 'translateY(0)'
	toggleBtn.style.transform = 'rotate(360deg)'
	toggleBtn.innerText = 'X'
} 

let closeMenu = () => {
	isOpen = false
	menu.style.transform = 'translateY(-200%)'
	toggleBtn.style.transform = 'rotate(0deg)'
	toggleBtn.innerText = '☰'
}

let getProduct = (wrapper) =>{
    fetch('/get/get_product.php').then(respns=>respns.text())
    .then((data)=>{
        wrapper.innerHTML = data;
    })
}