const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav bars
let navBars = document.querySelectorAll("a");
navBars.forEach(element =>  {
  navBars[0].textContent = "Services";
  navBars[1].textContent = "Product";
  navBars[2].textContent = "Vision";
  navBars[3].textContent = "Features";
  navBars[4].textContent = "About";
  navBars[5].textContent = "Contact";
});

const navLinks = document.getElementsByTagName("a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = "green";
}

// DOM IS AWESOME Heading
let mainHeading = document.querySelector("h1");
mainHeading.textContent = (siteContent["cta"]["h1"])

// Button
let button = document.querySelector("button");
button.textContent = (siteContent["cta"]["button"])

// Top Image
let topImage = document.getElementById("cta-img");
topImage.setAttribute('src', siteContent["cta"]["img-src"])

// Middle Image
let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Main Content
let main = document.querySelectorAll(".main-content");
main.textContent = (siteContent["main-content"]["top-content"])

// Paragraph Tags
let pTags = document.querySelectorAll("p");
pTags.forEach(element => {
  pTags[0].textContent = (siteContent["main-content"]["features-content"]);
  pTags[1].textContent = (siteContent["main-content"]["about-content"]);
  pTags[2].textContent = (siteContent["main-content"]["services-content"]);
  pTags[3].textContent = (siteContent["main-content"]["product-content"]);
  pTags[4].textContent = (siteContent["main-content"]["vision-content"]);
  pTags[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
  pTags[6].textContent =  "1 (888) 888-8888";
  pTags[7].textContent =  "sales@greatidea.io";
  pTags[8].textContent =  "Copyright Great Idea! 2018";
});

// h4 Tags
let hTags = document.querySelectorAll("h4");
hTags.forEach(element => {
  hTags[0].textContent = "Features";
  hTags[1].textContent = "About";
  hTags[2].textContent = "Services";
  hTags[3].textContent = "Product";
  hTags[4].textContent = "Vision";
  hTags[5].textContent = "Contact";
});

// newItem
const newItem = document.createElement('a');
  newItem.textContent = "Login";
  newItem.style.color = "crimson";

const parent = document.querySelector("nav");
parent.append(newItem);

// EventListener
//Step 1. Select the item. Grab a reference using querySelector,etc.
const logoImg = document.querySelector(".logo") //takes a string, takes first class
//console.log(funBus)

//Step2. Add event listener
logoImg.addEventListener("mouseenter", () => {
    logoImg.style.transform = "scale(1.5)";
    logoImg.style.transition = "transform 1s";
})//1st argument = event; 2nd argument = callback function

logoImg.addEventListener("mouseleave", () => {
    logoImg.style.transform = "scale(1)";
})



