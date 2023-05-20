let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);



const signNowButton = document.getElementById("sign-now-button");

let count = 3;

const addSignature = (person) => {

  const sign = document.createElement("p");

  const signContent = document.createTextNode("🖊️ " + person.name + " from " + person.hTown + " supports this.");

  sign.appendChild(signContent);

  const div = document.getElementsByClassName("signatures");
  div[0].appendChild(sign);


  const counter = document.getElementById("counter").remove();
  count = count + 1;

  const newCounter = document.createElement("p");
  newCounter.setAttribute("id", "counter");

  newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this cause."

  const div2 = document.getElementsByClassName("signatures");
  div2[0].appendChild(newCounter);
}



const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hTown: petitionInputs[1].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email');

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
      email.classList.remove('error');
  }

  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < person.name.length && i < person.hTown.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

}
signNowButton.addEventListener('click', validateForm);



let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
    revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



const reduceButton = document.getElementById("reduce-motion");

const reduceMotion = () => {
  
  animation = none;

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
    revealableContainers[i].classList.remove("active");
    }
  }

  revealableContainers[i].style.transitionDelay = animation.transitionDelay;
}

reduceButton.addEventListener("click", reduceMotion);



const toggleModal = (person) => {
  
  let modal = document.getElementById("thanks-modal");
  
  let modalContent = document.getElementById("modal-text-container");

  let intervalId = setInterval(scaleImage, 500);

  modal.style.display = "flex";

  modalContent.textContent = `Thank you so much ${person.name}! ${person.hTown} represent!`

  setTimeout(() => {
  modal.style.display = "none";
  clearInterval(intervalId);
}, 4000) 
  
}

let scaleFactor = 1;

let modalImage = document.getElementById("earth");

const scaleImage = () => {

  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
}



/* let closeButton = document.getElementById("close");

const closeModalButton = () => {
  display: none;
}

modal.addEventListener("click", closeModalButton); */