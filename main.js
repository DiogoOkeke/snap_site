 // Getting all required elements

let hamburgerMenu = document.querySelector('#hamburger-menu');
let navContent = document.querySelector('.nav-content');
let closeMenu = document.querySelector('#close-menu');
let featurePTag = document.querySelector('.feature-pTag');
let companyPTag = document.querySelector('.company-pTag');
let featuresSubContent = document.querySelector('.features-subContent');
let companySubContent = document.querySelector('.company-subContent');
let featureCaret = document.querySelector('.feature-caret');
let companyCaret = document.querySelector('.company-caret');
let transparentDiv = document.querySelector('.transparent');
let snapLogo = document.querySelector('.snap-logo');


// HamburgerMenu Onclick

hamburgerMenu.onclick = () => {
 navContent.style.display = 'block';
 navContent.style.pointerEvents = 'auto';
 transparentDiv.style.filter = 'blur(3px)';
 snapLogo.style.filter = 'blur(3px)';
}


// CloseMenu Onclick

closeMenu.onclick = () => {
 navContent.style.display = 'none';
 navContent.style.pointerEvents = 'none';
 featuresSubContent.style.display = 'none';
 featuresSubContent.style.pointerEvents = 'none';
 companySubContent.style.display = 'none';
 companySubContent.style.pointerEvents = 'none';
 featureCaret.style.transform = 'rotate(180deg)';
 companyCaret.style.transform = 'rotate(180deg)';
 transparentDiv.style.filter = 'blur(0)';
 snapLogo.style.filter = 'blur(0)';
}


//FeatureSection Onclick

featurePTag.onclick = () => {
 
 if(getComputedStyle(featuresSubContent).display === 'block'){
  featuresSubContent.style.display = 'none';
  featuresSubContent.style.pointerEvents = 'auto';
  featureCaret.style.transform = 'rotate(180deg)';
 }
 else{
  featuresSubContent.style.display = 'block';
  featuresSubContent.style.pointerEvents = 'auto';
  featureCaret.style.transform = 'rotate(360deg)';
 }

}


//CompanySection Onclick

companyPTag.onclick = () => {
 
 if(getComputedStyle(companySubContent).display === 'block'){
  companySubContent.style.display = 'none';
  companySubContent.style.pointerEvents = 'auto';
  companyCaret.style.transform = 'rotate(180deg)';
 }
 else{
  companySubContent.style.display = 'block';
  companySubContent.style.pointerEvents = 'auto';
  companyCaret.style.transform = 'rotate(360deg)';
 }

}


