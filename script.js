document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelectorAll('.side-nav');
    const btnnav=document.querySelectorAll('#btnnav');
    const overlayscreen=document.querySelectorAll('.nav-overlay');

btnnav.addEventListener('click', ()=>{   
    sidenav.classList.add('open');
});

overlayscreen.addEventListener('click', ()=>{
    sidenav.classList.remove('open');
});
});
