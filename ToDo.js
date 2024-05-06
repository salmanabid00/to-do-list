let inputbox = document.getElementById("inputbox");
let listcontainer = document.getElementById("list-cotainer"); 
function addTask() {
    if (inputbox.value === "") {
        alert("Please write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listcontainer.appendChild(li);
    }
    inputbox.value = "";
    saveTask();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});
function saveTask() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showList() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showList();




