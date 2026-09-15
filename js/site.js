document.addEventListener('DOMContentLoaded', function(){
  const button=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(button && nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});}
});
