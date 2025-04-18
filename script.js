




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

  window.addEventListener('load', () => {
    const horizontalArea = document.querySelector('.playlist-stickerWrapper');
    horizontalArea.scrollLeft = 0;
  });

  document.addEventListener('scroll', horizontalScroll, { passive: false });

  let playlistStickerWrapper = document.querySelector('.playlist-stickerWrapper');
  
  // 전체 콘텐츠 너비에서 창 너비를 뺀 값으로 스크롤 가능한 전체 너비 계산
  let scrollWidth = playlistStickerWrapper.scrollWidth - window.innerWidth;
  
  // 최대 스크롤 높이
  const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  function horizontalScroll(event) {
      event.preventDefault();  // 기본 스크롤 동작을 막음
  
      // 현재 수직 스크롤 위치
      let scrolled = window.scrollY;
  
      // 수평 스크롤로 변환 (scrollWidth * 비율)
      let scrollRatio = scrolled / maxScrollHeight;
      let translateX = scrollWidth * scrollRatio;
  
      // 수평 스크롤 위치 설정
      playlistStickerWrapper.scrollLeft = translateX;

    }

    const horizontalArea = document.querySelector('.playlist-stickerWrapper');

    horizontalArea.addEventListener('wheel', function (e) {
      const rect = horizontalArea.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
      // 스크롤 정보
      const scrollLeft = horizontalArea.scrollLeft;
      const maxScrollLeft = horizontalArea.scrollWidth - horizontalArea.clientWidth;
    
      // 수평 스크롤이 끝났을 경우 → 수직 스크롤 허용
      const isAtStart = scrollLeft <= 0 && e.deltaY < 0;
      const isAtEnd = scrollLeft >= maxScrollLeft && e.deltaY > 0;
    
      if (isInViewport && !isAtStart && !isAtEnd) {
        e.preventDefault();
        horizontalArea.scrollLeft += e.deltaY;
      }
    }, { passive: false });