console.log("hello.");


var form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted")
});