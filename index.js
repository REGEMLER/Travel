const wrapper = document.getElementById("wrapper");

//Burger
const menu = document.getElementById("header-menu");
const burger = document.getElementById("burger");
const X = document.getElementById("X");
const showMenu = (event) => {
    event.stopPropagation();
    wrapper.style.opacity = "0.5";
    menu.classList.add("header-menu_active");
    burger.classList.add("hamburger_active");
}
burger.addEventListener("click", showMenu);
const closeMenu = () => {
    wrapper.style.opacity = "1";
    menu.classList.remove("header-menu_active");
    burger.classList.remove("hamburger_active");
}
const closeMenuWithX = (event) => {
    event.stopPropagation();
    closeMenu();
}
const closeMenuWithMenu = (event) => {
    event.stopPropagation();
    if (event.target.tagName !== "A") {
        return;
    }
    closeMenu();
}
menu.addEventListener("click", closeMenuWithMenu);
wrapper.addEventListener("click", closeMenu);
X.addEventListener("click", closeMenuWithX);

//Login
const popup = document.getElementById("popup");
const SignIn = document.getElementById("SignIn");
const loginBtn = document.getElementById("header-item-btn");
const account = document.getElementById("account");
const showLogin = () => {
    popup.classList.add("popup-active");
    wrapper.style.opacity = "0.7";
}
const closeLogin = () => {
    popup.classList.remove("popup-active");
    wrapper.style.opacity = "1";
}
const showAlert = (e) => {
    e.stopPropagation();
    const form = document.forms.popup;
    const email = form.elements.mail;
    const pass = form.elements.pass;
    alert(`${email.value} ${pass.value}`)
}
const register = () => {
    const title = document.getElementById("popup-title");
    title.textContent = "Create account";
    const auth = document.getElementById("popup-auth");
    auth.style.display = "none";
    const or = document.getElementById("or");
    or.style.display = "none";
    const reg = document.getElementById("popup-register");
    reg.innerHTML = `Already have an account?<span id="register">Log in</span>`;
}
const logIn = () => {
    const title = document.getElementById("popup-title");
    title.textContent = "Log in to your account";
    const auth = document.getElementById("popup-auth");
    auth.style.display = "block";
    const or = document.getElementById("or");
    or.style.display = "block";
    const reg = document.getElementById("popup-register");
    reg.innerHTML = `Don’t have an account?<span id="register">Register</span>`;
}
const changePopup = (e) => {
    e.stopPropagation();
    if (e.target.id === "register") {
        if (e.target.textContent === "Register") {
            register()
        } else {
            logIn();
        }
    }
    return;
}
SignIn.addEventListener("click", showAlert);
popup.addEventListener("click", changePopup);
wrapper.addEventListener("click", closeLogin);
loginBtn.addEventListener("click", showLogin);
account.addEventListener("click", showLogin);

// slider 
const slider = document.getElementById("slider");
const drop1 = document.getElementById("pagination1");
const drop2 = document.getElementById("pagination2");
const drop3 = document.getElementById("pagination3");
const left = () => {
    slider.classList.remove("destinations-slider_right");
    drop1.checked = true;
    drop2.checked = false;
    drop3.checked = false;
    slider.classList.add("destinations-slider_left");
}
const right = () => {
    drop3.checked = true;
    drop2.checked = false;
    drop1.checked = false;
    slider.classList.remove("destinations-slider_left");
    slider.classList.add("destinations-slider_right");
}
const center = () => {
    drop3.checked = false;
    drop2.checked = true;
    drop1.checked = false;
    slider.classList.remove("destinations-slider_left");
    slider.classList.remove("destinations-slider_right");
}
let slideIndex = 1;
const showSlide = (n) => {
    const slides = document.getElementsByClassName("slider-item_small");
    const dots = document.querySelectorAll(".destinations-pagination_small input");
    console.log(dots);
    if (n < 1) {
        slideIndex = slides.length
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].checked = false;
    }
    slider.style.opacity = "0.5";
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].checked = true;
    setTimeout(() => {
        slider.style.opacity = "1";
    }, 400)
}
const slideLeft = () => {
    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");
    arrowRight.classList.remove("destinations-arrow_active");
    arrowLeft.classList.add("destinations-arrow_active");
    showSlide(++slideIndex)
}
const slideRight = () => {
    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");
    arrowLeft.classList.remove("destinations-arrow_active");
    arrowRight.classList.add("destinations-arrow_active");
    showSlide(--slideIndex)
}
const currentSlide = (n) => {
    showSlide(slideIndex = n);
}
