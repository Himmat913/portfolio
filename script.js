// THEME TOGGLE WITH PERSISTENCE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.textContent="☀️";
localStorage.setItem("theme","light");
}else{
toggle.textContent="🌙";
localStorage.setItem("theme","dark");
}

});

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){
document.body.classList.add("light");
toggle.textContent="☀️";
}


// TYPING ANIMATION

const roles=[
"Web Developer",
"Machine Learning Enthusiast",
"Data Science Learner"
];

let roleIndex=0;
let charIndex=0;

const typing=document.querySelector(".typing");

function type(){

if(charIndex<roles[roleIndex].length){

typing.textContent+=roles[roleIndex][charIndex];
charIndex++;

setTimeout(type,150);

}
else{
setTimeout(erase,1500);
}

}

function erase(){

if(charIndex>0){

typing.textContent=roles[roleIndex].substring(0,charIndex-1);
charIndex--;

setTimeout(erase,80);

}
else{

roleIndex++;
if(roleIndex>=roles.length) roleIndex=0;

setTimeout(type,300);

}

}

type();


// PROJECT DATA

const projects=[

{
title:"Food Delivery Delay Prediction",
desc:"Machine learning model predicting delivery delays using XGBoost.",
link:"https://github.com/Himmat913/Food-delivery-delay-prediction-model"
},

{
title:"Handwritten Digit Recognition",
desc:"Digit classifier built using MNIST dataset achieving 97% accuracy.",
link:"https://github.com/Himmat913/Handwritten-digit-recognition"
},

{
title:"Spotify Web Interface",
desc:"Responsive Spotify inspired UI built using HTML and CSS.",
link:"https://himmat913.github.io/Spotify-web-interface"
},

{
title:"Portfolio Website",
desc:"Personal portfolio website built with HTML CSS JavaScript.",
link:"https://github.com/Himmat913/portfolio"
}

];

const container=document.getElementById("projectsContainer");

projects.forEach(project=>{

const card=document.createElement("div");

card.classList.add("project");

card.innerHTML=`
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.link}" target="_blank">View Project</a>
`;

container.appendChild(card);

});


// SCROLL PROGRESS BAR

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});


// ACTIVE NAV LINK

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-100;

if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});
