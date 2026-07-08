// ==========================
// EXPERT IN ONLINE WORLD
// JavaScript
// ==========================

// ---------- Slider ----------

let slideIndex = 0;

showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}

// ---------- WhatsApp Service ----------

const phone = "8801857223470";

document.querySelectorAll(".service-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const service = card.dataset.service;

        const msg =
`আসসালামু আলাইকুম।

আমি "${service}" সেবা নিতে চাই।

অনুগ্রহ করে বিস্তারিত জানাবেন।

ধন্যবাদ।`;

        const url =
`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

        window.open(url,"_blank");

    });

});

// ---------- Search ----------

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// ---------- Back To Top ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0057D9";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

window.addEventListener("scroll",()=>{

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ---------- Floating WhatsApp ----------

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/8801857223470";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.style.position="fixed";
whatsapp.style.left="20px";
whatsapp.style.bottom="20px";
whatsapp.style.width="60px";
whatsapp.style.height="60px";
whatsapp.style.background="#25D366";
whatsapp.style.borderRadius="50%";
whatsapp.style.display="flex";
whatsapp.style.justifyContent="center";
whatsapp.style.alignItems="center";
whatsapp.style.fontSize="32px";
whatsapp.style.textDecoration="none";
whatsapp.style.color="#fff";
whatsapp.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";
whatsapp.style.zIndex="9999";

document.body.appendChild(whatsapp);

console.log("EXPERT IN ONLINE WORLD Loaded Successfully");