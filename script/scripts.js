const div = document.querySelector(".content");
const inputtxt = document.querySelector("#inputtxt");
let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae, id nam mollitia sed excepturi velit hic recusandae quas unde dolore quam iusto et. In dolor quia culpa architecto repudiandae.";

var totalSpan = document.querySelectorAll("span");

document.querySelector(".inputbox").style.display = "none";

var time = 0
let contentArray = content.split("");
let length = contentArray.length

function splitString(contentArray) {

    contentArray.forEach((element) => {
        const span = document.createElement("span");
        const textNode = document.createTextNode(`${element}`);
        span.appendChild(textNode);
        div.appendChild(span);
    })
}

splitString(contentArray)


function timer() {
    document.querySelector(".inputbox").style.display = "block";

    timerPanel = setInterval(timer, 1000)

    function timer() {
        time = time + 1
        document.querySelector(".timerValue").innerHTML = time;
    }


}

function stop() {
    clearInterval(timerPanel)
}



inputtxt.addEventListener("input", myfunction)

function myfunction() {

    let count = 0

    var input = inputtxt.value.split("");

    let result = content.localeCompare(inputtxt.value);
    if (result === 0) {
        document.querySelectorAll("span").forEach((element) => {
            element.classList.add("green");
        })
    }


    if (input.length === contentArray.length) {
        stop()
    }

    if (inputtxt.value === "") {
        document.querySelectorAll("span").forEach((element) => {
            element.classList.remove("green");
            element.classList.remove("red");
        })
    }


    if (input.length === contentArray.length) {
        inputtxt.removeEventListener("input", myfunction)
    }

    input.forEach((element, value) => {
        if (element === contentArray[value]) {
            document.querySelectorAll("span")[value].classList.add("green")
        } else if (element !== contentArray[value] && element !== " ") {
            document.querySelectorAll("span")[value].classList.add("red")
            count = count + 1;
            document.querySelector(".mistakeValue").innerHTML = count;
        } else if (element.toUpperCase() === contentArray[value] || element.toLowerCase() === contentArray[value]) {
            document.querySelectorAll("span")[value].classList.add("red")
            count = count + 1;
            document.querySelector(".mistakeValue").innerHTML = count;
        } else if (element === " ") {
            document.querySelectorAll("span")[value].classList.add("red")
            count = count + 1;
            document.querySelector(".mistakeValue").innerHTML = count;
        }
    })
}





function reset() {
    window.location.reload();
}


inputtxt.addEventListener("keydown", (event) => {
    var key = event.keyCode || event.charCode;
    if (key === 8)
        document.querySelectorAll("span").forEach((element) => {
            let a = element.classList.contains("green") || element.classList.contains("red")
            if (a === true) {
                element.classList.remove("green") || element.classList.remove("red")
            }
        })
})