/**
 * @description Função que altera o título do login conforme o item selecionado
 * @param {String} titleSelected item do menu selecionado (SIGAA, SIPAC, SIGRH, SIGPP, SIGED, SIGAdmin)
 */
function setLoginTitle(titleSelected) {
  var title = document.getElementsByClassName("title");
  title[0].innerHTML = titleSelected;
}

/**
 * @description Função que remove a classe item-selected dos itens do menu que não seja o item selecionado
 * @param {String} exceptionItem item do menu selecionado que não terá o estilo excluído (SIGAA, SIPAC, SIGRH, SIGPP, SIGED, SIGAdmin)
 */
function removeOtherSelectedItems(exceptionItem) {
  const navItens = [];
  exceptionItem !== "SIGAA" &&
    navItens.push(document.getElementsByName("SIGAA"));
  exceptionItem !== "SIPAC" &&
    navItens.push(document.getElementsByName("SIPAC"));
  exceptionItem !== "SIGRH" &&
    navItens.push(document.getElementsByName("SIGRH"));
  exceptionItem !== "SIGPP" &&
    navItens.push(document.getElementsByName("SIGPP"));
  exceptionItem !== "SIGED" &&
    navItens.push(document.getElementsByName("SIGED"));
  exceptionItem !== "SIGAdmin" &&
    navItens.push(document.getElementsByName("SIGAdmin"));

  navItens.forEach((item) => {
    item[0].classList.remove("item-selected"); // Removendo a classe do span
    item[1].classList.remove("item-selected"); // Removendo a classe do icon
  });
}

/**
 * @description Função que adiciona a classe item-selected ao item selecionado
 * @param {String} selected item do menu selecionado (SIGAA, SIPAC, SIGRH, SIGPP, SIGED, SIGAdmin)
 */
function selectItem(selected) {
  const itemSelected = document.getElementsByName(selected);
  itemSelected[0].classList.contains("item-selected")
    ? itemSelected[0].classList.remove("item-selected")
    : itemSelected[0].classList.add("item-selected");
  itemSelected[1].classList.contains("item-selected")
    ? itemSelected[1].classList.remove("item-selected")
    : itemSelected[1].classList.add("item-selected");
  removeOtherSelectedItems(selected);
  setLoginTitle(selected);
  closeMenu();
}

/**
 * @description Função responsavel por fazer com que o menu seja exibido
 */
function handleMenu() {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.style.left = "0";
}

/**
 * @description Função responsavel por fazer com que o menu seja fechado
 */
function closeMenu() {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.style.left = "-1000px";
}
