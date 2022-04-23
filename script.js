function setLoginTitle() {
  var title = document.getElementsByClassName("title");
  const navItens = document.getElementsByClassName("nav-item");
  console.log(navItens);
  if (title) {
    title.innerHTML = "Login";
  }
}

function selectItem(selected) {
  const itemSelected = document.getElementsByName(selected);
  console.log("SELECIIONADO", itemSelected);
}
