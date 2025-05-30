




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

document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.playlist-stickerWrapper');

  wrappers.forEach(wrapper => {
    let targetScroll = 0;
    let currentScroll = 0;

    // 최대 스크롤값 계산
    const getMaxScroll = () => wrapper.scrollWidth - wrapper.clientWidth;

    // 부드러운 애니메이션
    function smoothScroll() {
      // 현재 위치와 목표 위치 차이가 작으면 종료
      if (Math.abs(targetScroll - currentScroll) < 0.1) {
        currentScroll = targetScroll;
      } else {
        currentScroll += (targetScroll - currentScroll) * 0.15;
      }

      wrapper.scrollLeft = currentScroll;
      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();

    // 휠로 가로 스크롤 제어
    wrapper.addEventListener('wheel', (e) => {
      const isHovered = wrapper.getBoundingClientRect().top < window.innerHeight;

      if (!isHovered) return;

      e.preventDefault();

      targetScroll += e.deltaY;

      // clamp를 매번 최신 maxScroll 기준으로 적용
      const maxScroll = getMaxScroll();
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    }, { passive: false });
  });
});
