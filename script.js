let main = document.getElementById("main");
let img = document.getElementById("img");
let left = document.getElementById("left");
let right = document.getElementById("right");


let moveToSignUp = (e)=>{
    e.preventDefault();
    img.src = "./Assets/signup.jpg";
    left.style.visibility = "visible";
    right.style.visibility = "hidden";
    main.classList.add("signup");
    main.classList.remove("login");
}

let moveToLogIn = (e)=>{
    e.preventDefault();
    img.src = "./Assets/login.jpg";
    right.style.visibility = "visible";
    left.style.visibility = "hidden";
    main.classList.add("login");
    main.classList.remove("signup");
}
