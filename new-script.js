const addElement = (text) => {
  let newEl = document.createElement("div");
  newEl.textContent = text;
  document.body.appendChild(newEl);
}