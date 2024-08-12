const photosAll = [
  { 'img' : './images/lake.jpg'},
  { 'img' : './images/hotel.jpg'},
  { 'img' : './images/boat-in-the-lake.jpg'}
]

const popupAdvice = document.querySelector(".popup__advice");
const popupProgram = document.querySelector(".popup__program");
const buttonAdvice = document.querySelector(".header__button-advice");
const buttonFindProgram = document.querySelector(".header__button");
const popupCloseButtonAdvice = popupAdvice.querySelector(".popup__close");
const popupCloseButton = popupProgram.querySelector(".popup__close");
const formPhotos = document.querySelector('.callback__form');
const inputPhotos = formPhotos.querySelector('.callback__input');
const btnFormPhotos = formPhotos.querySelector('.callback__button');
const photo = document.querySelector('.photo__item');
const containerPhotos = document.querySelector('.photo__items');

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


photosAll.map((image) => {
  const newImg = document.createElement('img');
  newImg.classList.add('photo__item');
  newImg.src = image.img;
  newImg.alt = '';
  containerPhotos.append(newImg);
})

function btnDisable() {
  btnFormPhotos.disabled = true;
  btnFormPhotos.classList.add('callback__button_disabled')
}

function btnEnable() {
  btnFormPhotos.disabled = false;
  btnFormPhotos.classList.remove('callback__button_disabled')
}

function addPhoto(e) {
  e.preventDefault();
  const linkPhoto = inputPhotos.value;
  const newPhotos = document.createElement('img');
  newPhotos.classList.add('photo__item');
  newPhotos.src = linkPhoto;
  newPhotos.alt = 'Фото пользователя';
  containerPhotos.append(newPhotos);

  btnDisable();
  inputPhotos.value = '';
}

btnFormPhotos.addEventListener('click', addPhoto);

inputPhotos.addEventListener('keyup', (e)=> {
  const value = e.currentTarget.value;
  if(value === ''){
    btnDisable()

  } else {
    btnEnable() 
  }
});

inputPhotos.addEventListener('change', (e)=> {
  const value = e.currentTarget.value;
  if(value !== ''){
    btnEnable()
  } else {
    btnDisable()
  }
});