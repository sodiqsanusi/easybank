const navButton = document.getElementById('navButton');
const navButtonImg = document.querySelector('#navButton img')
const mobileNavPanel = document.getElementById('mobileNavPanel')
let isMobileNavOpen = false
navButton.onclick = () => {
  if(isMobileNavOpen){
    isMobileNavOpen = !isMobileNavOpen;
    mobileNavPanel.style.display = 'none';
    navButtonImg.setAttribute('src', './images/icon-hamburger.svg');
    document.body.style.overflow = 'initial';
  }else{
    isMobileNavOpen = !isMobileNavOpen;
    mobileNavPanel.style.display = 'block';
    navButtonImg.setAttribute('src', './images/icon-close.svg');
    document.body.style.overflow = 'hidden';
  }
}