




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

  // document.addEventListener('DOMContentLoaded', function () {
  //   const wrappers = document.querySelectorAll('.playlist-stickerWrapper');

  //   wrappers.forEach(wrapper => {
  //     const scrollWidth = wrapper.scrollWidth - window.innerWidth;
  //     const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  //     let currentScroll = 0;
  //     let targetScroll = 0;

  //     function clamp(val, min, max) {
  //       return Math.max(min, Math.min(val, max));
  //     }

  //     function animateScroll() {
  //       currentScroll += (targetScroll - currentScroll) * 0.1;
  //       wrapper.scrollLeft = currentScroll;
  //       requestAnimationFrame(animateScroll);
  //     }

  //     animateScroll();

  //     function handleScroll(event) {
  //       const rect = wrapper.getBoundingClientRect();
  //       const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  //       if (!isVisible) return;
  //       event.preventDefault();

  //       const scrollY = window.scrollY;
  //       const ratio = clamp(scrollY / maxScrollHeight, 0, 1);
  //       targetScroll = scrollWidth * ratio;
  //     }

  //     document.addEventListener('scroll', handleScroll, { passive: false });

  //     wrapper.addEventListener('wheel', function (e) {
  //       const rect = wrapper.getBoundingClientRect();
  //       const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  //       if (!isVisible) return;

  //       const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
  //       const isAtStart = wrapper.scrollLeft <= 0 && e.deltaY < 0;
  //       const isAtEnd = wrapper.scrollLeft >= maxScrollLeft && e.deltaY > 0;

  //       if (!isAtStart && !isAtEnd) {
  //         e.preventDefault();
  //         targetScroll += e.deltaY;
  //         targetScroll = clamp(targetScroll, 0, maxScrollLeft);
  //       }
  //     }, { passive: false });
  //   });
  // });