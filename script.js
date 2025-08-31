function addItem() {
  let input = document.getElementById("itemInput");
  let text = input.value.trim();
  if (text === "") {
    alert("Please enter some text");
    return;
  }
  let li = document.createElement("li");
  li.textContent = text;
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(delBtn);
  document.getElementById("itemList").appendChild(li);
  input.value = "";
}
