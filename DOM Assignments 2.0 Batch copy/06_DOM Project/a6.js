
// Adding Ineuron logio
const headerLogo= document.querySelector('header').firstChild;
headerLogo.src="./assets/ineuron-logo.png";

//Add $10
const price=document.querySelector('.app_price');
price.children[0].innerText="$10";

//Adding Logo

const logoParent= document.querySelector('.footer_social');

const div= document.createElement('div');

div.classList.add('footer_social_ico');
div.innerHTML='<i class="fa-brands fa-linkedin"></i>';

logoParent.appendChild(div);