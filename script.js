const msg = document.querySelector("#msg");
msg.innerText = "Hello this is git course";

let func = () => {
    msg.innerHTML = "I will change in git";
    msg.classList.add("msg");
};
func();