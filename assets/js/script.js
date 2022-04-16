'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});


// show/hide faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open');

    // change icon 
    const icon= faq.querySelector('.faq_icon i');
    if(icon.className === 'uil uil-plus'){
      icon.className="uil uil-minus"
    }else{
      icon.className="uil uil-plus";
    }
  })
})

//  Animation Scroll
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
  const triggerBottom=window.innerHeight *0.7
  boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top

    if(boxTop<triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}


// drop-down screen contact-form//

const ro = document.querySelector('.btn-text');
const re = document.querySelector('.enquire');
const cr = document.querySelector('.cross');

ro.addEventListener('click',()=>{
  re.classList.add('revel')
})
cr.addEventListener('click',()=>{
  re.classList.remove('revel')
})

