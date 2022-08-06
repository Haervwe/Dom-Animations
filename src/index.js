import "./style.scss";

let main = document.getElementById("main");
let header = document.createElement("div");
header.className = "header";
let dropListContainer = document.createElement("div");
let dropList = document.createElement("div");
let showBtn = document.createElement("div");
showBtn.className = "showList";
showBtn.innerText = "Show Menu";
dropList.className = "dropList";
showBtn.addEventListener("click", () => {
  if (dropList.className == "dropList") {
    dropList.className = "dropList render";
    setTimeout(() => {
      dropList.className = "dropList active render";
    }, 200);
  } else {
    dropList.className = "dropList render";
    setTimeout(() => {
      dropList.className = "dropList";
    }, 500);
  }
});
dropListContainer.className = "dropListContainer";
dropListContainer.appendChild(showBtn);
dropListContainer.appendChild(dropList);
for (let i = 0; i < 6; i++) {
  let test = document.createElement("div");
  test.className = "item";
  test.innerText = "test";
  dropList.appendChild(test);
}
header.appendChild(dropListContainer);
main.appendChild(header);
let placeholder = document.createElement("div");
placeholder.className = "placeholder";
main.appendChild(placeholder);
