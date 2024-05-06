const popupAdvice = document.querySelector(".popup__advice");
const popupProgram = document.querySelector(".popup__program");
const buttonAdvice = document.querySelector(".header__button-advice");
const buttonFindProgram = document.querySelector(".header__button");
const popupCloseButtonAdvice = popupAdvice.querySelector(".popup__close");
const popupCloseButton = popupProgram.querySelector(".popup__close");

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

const handleOpenAdvice = () => {
  openPopup(popupAdvice);
};

const handleCloseAdvice = () => {
  closePopup(popupAdvice);
};

const handleOpenPopupProgram = () => {
  openPopup(popupProgram);
};

const handleClosePopupProgram = () => {
  closePopup(popupProgram);
};

buttonAdvice.addEventListener("click", handleOpenAdvice);
popupCloseButtonAdvice.addEventListener("click", handleCloseAdvice);

buttonFindProgram.addEventListener("click", handleOpenPopupProgram);
popupCloseButton.addEventListener("click", handleClosePopupProgram);
