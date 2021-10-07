//função que será disparada uando o botão for clicado, aqui ocorrerá a mudança para o dark-mode
function changeMode(){
    changeClasses();
    changeText();
}

//função que atribui a classe dark-mode para os objetos
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//função responsavel por alternar entre os textos que identificarão quando a página estiver no modo dark-mode e light-mode
function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
       button.innerText = lightMode;
       h1.innerText = darkMode + " ON";
       return;
   }
   button.innerText = darkMode;
       h1.innerText = lightMode + " ON";
}

//atribuição das variáveis com os métododos que permitirão a identificação de cada objeto a ter a classe dark-mode atribuida
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//o método addEventListener irá observar quando o evento click acontecer para ativar a função changeMode
button.addEventListener('click', changeMode);