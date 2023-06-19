let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar-after');

menu.onclick = () =>{
  navbar.classList.toggle('open');
  if (navbar.classList.contains('open')) {
    document.body.style.backgroundColor = 'gray';
  } else {
    document.body.style.backgroundColor = ''; 
  }
};

document.querySelector('.search-icon').onclick = () =>{
    document.querySelector('.search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () =>{
    document.querySelector('.search-form').classList.remove('active');
};

var loader = document.getElementById("loader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});


let formBoxLogin = document.querySelector('.form-box-login');
let registerLink = document.querySelector('.register-link');
let loginLink= document.querySelector('.login-link');

registerLink.addEventListener('click', ()=> {
  formBoxLogin.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  formBoxLogin.classList.remove('active');
});

const LoginBtn = document.querySelector('.header-login-btn');
const wrapped = document.querySelector('.wrapped');
const closeBtn = document.querySelector('.close');

LoginBtn.addEventListener ('click', ()=>{
  wrapped.classList.add('active');
});

closeBtn.addEventListener ('click', ()=>{
  wrapped.classList.remove('active');
});

const containers = document.querySelectorAll('.slide-book-box');
const box = document.querySelector('.slide-book');

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateKeyframes(container) {
  const x1 = getRandom(0, container.offsetWidth - box.offsetWidt-5);
  const y1 = getRandom(0, container.offsetHeight - box.offsetHeight-5);
  const x2 = getRandom(0, container.offsetWidth - box.offsetWidth)-5;
  const y2 = getRandom(0, container.offsetHeight - box.offsetHeight-5);
  const x3 = getRandom(0, container.offsetWidth - box.offsetWidth-5);
  const y3 = getRandom(0, container.offsetHeight - box.offsetHeight-5);
  const x4 = getRandom(0, container.offsetWidth - box.offsetWidth-5);
  const y4 = getRandom(0, container.offsetHeight - box.offsetHeight-5);
  
  const keyframes = `
    @keyframes move {
      0% {
        transform: translate(${x1}px, ${y1}px);
      }
      25% {
        transform: translate(${x2}px, ${y2}px);
      }
      50% {
        transform: translate(${x3}px, ${y3}px);
      }
      75% {
        transform: translate(${x4}px, ${y4}px);
      }
      100% {
        transform: translate(${x1}px, ${y1}px);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = keyframes;
  container.appendChild(styleSheet);
}
containers.forEach(container => {
  updateKeyframes(container);
});

 var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    speed: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      slideChangeTransitionStart: function () {
        $('.slide-info-box').hide(0);
        $('.slide-book-box').hide(0);
        $('.slide-info').hide(0);
        $('.slide-info-box').removeClass('aos-init').removeClass('aos-animate');
        $('.slide-book-box').removeClass('aos-init').removeClass('aos-animate');
        $('.slide-info').removeClass('aos-init').removeClass('aos-animate');
      },
      slideChangeTransitionEnd: function () {
        $('.slide-info-box').show(0);
        $('.slide-book-box').show(0);
        $('.slide-info').show(0);
        AOS.init();
      },
    } ,
  }); 
   AOS.init(); 

   var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      "@2.00": {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var flexContainer = document.querySelector('.flex-container');
        var flexItems = flexContainer.querySelectorAll('.feature');
        var firstItemOffsetTop = flexItems[0].offsetTop;

        function checkLineBreak() {
        flexItems.forEach(function(item) {
            if (item.offsetTop > firstItemOffsetTop) {
            item.classList.add('new-line');
            } else {
            item.classList.remove('new-line');
            }
        });
        }

        window.addEventListener('resize', checkLineBreak);
        checkLineBreak();






