const addElement = (text, color) => {
  let newEl = document.createElement("div");
  newEl.textContent = text;
  newEl.setAttribute('style', `color: ${color}`);
  document.body.appendChild(newEl);

  alert('new elemend added');
}