// https://www.fredpizza.co.kr/





const wrapper = document.querySelector('.HeaderOpenBtn');
wrapper.addEventListener('click',function(){
    document.querySelector('headernavigation').style.display='block'
})




document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("highlight").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("playlist").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("inviteYou").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector('.closebtn').addEventListener('click',()=>{
    document.querySelector('.headernavigation').style.display='none'
  })
  document.querySelector('.HeaderOpenBtn').addEventListener('click',()=>{
    document.querySelector('.headernavigation').style.display='block';
  })

  document.addEventListener('DOMContentLoaded', function () {
    const targets = document.querySelectorAll('.playliststicker-wrapper');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        } else {
          entry.target.classList.remove('on');
        }
      });
    }, {
      threshold: 0.5
    });
  
    targets.forEach(target => observer.observe(target));
  });

  const box= document.querySelectorAll('.highlightHover');

  box[0].style.backgroundColor = 'rgb(165,143,249)'
  box[1].style.backgroundColor = 'rgb(238, 184, 229)'
  box[2].style.backgroundColor = 'rgb(255, 133, 92)'
  box[3].style.backgroundColor = 'rgb(247, 247, 247)'
  box[4].style.backgroundColor = 'rgb(224, 245, 146)'



  const element = document.querySelector(".playlist-stickerWrapper");

  element.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element.scrollBy({
      left: event.deltaY < 0 ? -50 : 50,
      
    });
  });
  