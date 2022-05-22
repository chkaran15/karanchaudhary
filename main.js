let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Email JS

function validatae(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click',(e) =>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }
        else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    });
}
validatae();

function sendmail(name,emal,msg){
    emailjs.send("service_bw5ynab","template_rpofsd4",{
    from_name : email,
    to_name: name,
    message: msg,   
    });
}
function emptyerror(){
    swal.fire({
        title:"Oh Noo..",
        text: "Field cannot be empty!",
        icon : "error", 

    });
}

function success(){
    swal.fire({
        title:"Email sent successfully",
        text: "We try to reply in 24 hours",
        icon : "success", 
    });
}

//  HEader Background Change on Scroll

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("header-active",window.scrollY > 0);
});

// Scroll top
let scrolltop = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=>{
    scrolltop.classList.toggle("scroll-active",window.scrollY >= 400);
});