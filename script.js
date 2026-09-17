const header=document.querySelector('.topbar');
document.querySelector('#year').textContent=new Date().getFullYear();
const update=()=>header.classList.toggle('scrolled',window.scrollY>10);
update();window.addEventListener('scroll',update,{passive:true});
