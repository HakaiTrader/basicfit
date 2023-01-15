// Header bande annonce

const quit = document.querySelector('.header-offer .quit')
const headerOffer = document.querySelector('.header-offer')
const getBag = document.querySelector('.get-bag')
const subscribeNow = document.querySelector('.subscribe-now')

quit.addEventListener('click', animeHeaderOffer)

function animeHeaderOffer() {
    headerOffer.classList.add('anime-header-offer')
    setTimeout(() => {
        getBag.style.display = 'none';
        subscribeNow.style.display = 'none';
    }, 300);
    setTimeout(() => {
        headerOffer.style.display = 'none';
    }, 501);
}
// // // // // // // // 
// Changement de langue.
// // // // // // // //
const menuLangage = document.querySelector('.langage p')
const choiceLangage = document.querySelector('.choice-langage')
const lang = document.querySelectorAll('.lang');

toggleMenuLang = false
menuLangage.addEventListener('mouseover', openMenuLangage);
function openMenuLangage(e) {
    if (toggleMenuLang === false) {
        choiceLangage.style.display = 'flex';
        toggleMenuLang = true
    }
}
choiceLangage.addEventListener('mouseleave', closeMenuLangage)
lang.forEach(el => el.addEventListener('click', closeMenuLangage))

function closeMenuLangage() {
    if (toggleMenuLang === true) {
        choiceLangage.style.display = 'none';
        toggleMenuLang = false;
    }
}
// changement initial 'fr','nl','en'. //
lang.forEach(el => el.addEventListener('click', changeInitial))

function changeInitial(e) {
    if (e.target === lang[0]) {
        menuLangage.textContent = 'NL';
    } else if (e.target === lang[1]) {
        menuLangage.textContent = 'FR';
    } else if (e.target === lang[2]) {
        menuLangage.textContent = 'EN';
    }
}
// // // // // // // // // // // // // // // // 
// Barre de Recherche => Ouverture / Fermeture.
// // // // // // // // // // // // // // // //

const logoResearch = document.querySelector(".logo-research");
const logoResearchImg = document.querySelector(".logo-research img");
const inputResearch = document.querySelector('.text-research')

toggleResearch = false;

logoResearch.addEventListener('click', openResearchBar);
logoResearchImg.addEventListener('click', openResearchBar);

function openResearchBar() {
    logoResearch.classList.add('active')
    inputResearch.classList.add('active')
    toggleResearch = true;
}

window.addEventListener('resize', closeResearchBar)
window.addEventListener('click', closeAll)
function closeAll(e) {
    if (e.target !== logoResearch && toggleResearch === true && e.target !== inputResearch) {
        closeResearchBar()
    } else if (e.target !== menuLangage || e.target !== choiceLangage) {
        closeMenuLangage()
    }
}

function closeResearchBar() {
    logoResearch.classList.remove('active');
    inputResearch.classList.remove('active');
    toggleResearch = false;
}
/*******************/
/* Footer menu pays*/
/*******************/

const select = document.querySelector('.select-country');
const selectImg = document.querySelector('.menu-pays img');

select.addEventListener('change', changeFlag)

function changeFlag(){

    switch (select.value) {
        case "Basic-fit Nederlands":
            selectImg.src = "./images/Nederlands.svg"
            break;
        case "Basic-fit belgïe/belgique":
            selectImg.src = "./images/belgique.svg"
            break;
        case "Basic-fit France":
            selectImg.src = "./images/France.svg"
            break;
        case "Basic-fit Espana":
            selectImg.src = "./images/Espagne.svg"
            break;
        case "Basic-fit Deutschland":
            selectImg.src = "./images/Allemagneµ.svg"
            break;

        default:
            break;
    }
}
/*******************/
/* MODAL MENU */
/*******************/

const modalMenuIcon = document.querySelector('.menu-1025px img');
const modalMenu = document.querySelector('.menu-modal');
const modalQuit = document.querySelector('.menu-modal-header .quit');
const modalMenuLi = document.querySelectorAll('.menu-modal-link ul li')

console.log(modalMenuIcon);

modalMenuIcon.addEventListener('click', openModalMenu);
modalQuit.addEventListener('click', closeModalMenu);
modalMenuLi.forEach(el => el.addEventListener('click', closeModalMenu))

function openModalMenu(){
    modalMenu.style.display = "flex";
}
function closeModalMenu() {
    modalMenu.style.display = 'none';
}

/*******************/
/*    ANIMATIONS    */
/*******************/

/****TO BOTTOM***/
const avantage = [...document.querySelectorAll('.avantages-details, .cont6-text, .cont6-photo img, .subscribe-now ')];

const toBottom = new IntersectionObserver(handleObserverBottom,{rootMargin:'-5%'})
avantage.forEach(el => toBottom.observe(el))

function handleObserverBottom(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('tobottom');
        }
    })
}

/****TO TOP***/

const menuDetails = [...document.querySelectorAll('.image-basic, .image-premium, .image-All-in ')];

const toTop = new IntersectionObserver(handleObserverTop,{rootMargin:'-30%'})
menuDetails.forEach(el => toTop.observe(el))

function handleObserverTop(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('totop');
        }
    })
}





