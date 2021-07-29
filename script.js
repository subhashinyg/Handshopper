let menu = document.querySelection('#menu-bar');
let navbar = document.querySelection('.navbar');
let header = document.querySelection('.header-2');



menu.addEventListener('click', () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
});

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove ('active');

	if(window.scrollY > 150){
		header.classList.add('active');
	}else{
		header.classList.remove('active');		
	}
}