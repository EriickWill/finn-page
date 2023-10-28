const body = document.querySelector("body")
const loader = document.querySelector(".loader")

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load',()=>{

    setTimeout(() => {
      fecharLoader()
      mostrarHeader()
    }, 2500);
    
  });
});
function fecharLoader(){
  gsap.to(".load-text",0.4,{
    opacity:0,
  })
  gsap.to(".bar",1.5,{
    height:0,
    stagger:{
      amount:0.5,
    }
  })
  setTimeout(() => {
    
    body.classList.add("loader-off")
    loader.classList.remove("loader")
    loader.classList.add("loader_off")
  }, 2500);
}
function mostrarHeader() {
  gsap.from('.link',2,{
    delay:2,
    opacity:0,
    stagger:{
      amount:0.5
    }
  })
  gsap.from('.name',1.5,{
    delay:3,
    opacity:0,
    y:70
  })
  gsap.from('.h3-header',1.5,{
    delay:4,
    opacity:0,
    y:50
  })
  
  gsap.from('.productHeader',1.5,{
    delay:5,
    opacity:0,
    y:50
  })
}