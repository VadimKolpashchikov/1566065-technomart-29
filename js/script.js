let bookmarks = document.querySelector('.bookmarks');
let buttonBookmarks = document.querySelectorAll('.button-in-bookmarks');
for (let i=0; i<buttonBookmarks.length; i++){
  buttonBookmarks[i].addEventListener('click', function () {
    bookmarks.classList.add('full-bookmarks');
  });
}

//Добавить в корзину

let basket = document.querySelector('.basket');
let buttonBuy = document.querySelectorAll('.button-buy');
let modalAdded = document.querySelector('.modal-added-to-cart');
for (let i=0; i<buttonBuy.length; i++){
  buttonBuy[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    basket.classList.add('full-basket');
    modalAdded.classList.add('modal-visible');
  });
}

let modalAddedClose = document.querySelector('.modal-added-to-cart-close')
modalAddedClose.addEventListener('click', function () {
  modalAdded.classList.remove('modal-visible');
});

modalAddedClose.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27){
    modalAdded.classList.remove('modal-visible');
  }
});

//Слайдер

let slider = document.querySelector('.slider');
let sliderRight = document.querySelector('.slider-button-right');
let sliderLeft = document.querySelector('.slider-button-left');
let sliderTop1 = document.querySelector('.slider-top-1');
let sliderTop2 = document.querySelector('.slider-top-2');
let sliderNumber1 = document.querySelector('.slider-number-1');
let sliderNumber2 = document.querySelector('.slider-number-2');

sliderRight.addEventListener('click', function () {
  slider.classList.add('slider-background-2');
  sliderTop1.classList.add('slider-top-hidden');
  sliderTop2.classList.remove('slider-top-hidden');
  sliderNumber1.classList.remove('slider-number-active');
  sliderNumber2.classList.add('slider-number-active');
});

sliderNumber2.addEventListener('click', function () {
  slider.classList.add('slider-background-2');
  sliderTop1.classList.add('slider-top-hidden');
  sliderTop2.classList.remove('slider-top-hidden');
  sliderNumber1.classList.remove('slider-number-active');
  sliderNumber2.classList.add('slider-number-active');
});

sliderLeft.addEventListener('click', function () {
  slider.classList.remove('slider-background-2');
  sliderTop1.classList.remove('slider-top-hidden');
  sliderTop2.classList.add('slider-top-hidden');
  sliderNumber1.classList.add('slider-number-active');
  sliderNumber2.classList.remove('slider-number-active');
});

sliderNumber1.addEventListener('click', function () {
  slider.classList.remove('slider-background-2');
  sliderTop1.classList.remove('slider-top-hidden');
  sliderTop2.classList.add('slider-top-hidden');
  sliderNumber1.classList.add('slider-number-active');
  sliderNumber2.classList.remove('slider-number-active');
});

//Сервисы

let servicesDelivery = document.querySelector('.services-delivery');
let servicesGuarantee = document.querySelector('.services-guarantee');
let servicesCredit = document.querySelector('.services-credit');
let delivery = document.querySelector('.delivery');
let guarantee = document.querySelector('.guarantee');
let credit = document.querySelector('.credit');
let servicesClear = function () {
  document.querySelector('.services-button-active').classList.remove('services-button-active');
  document.querySelector('.services-item-visible').classList.remove('services-item-visible');
};

servicesDelivery.addEventListener('click', function () {
  servicesClear();
  servicesDelivery.classList.add('services-button-active');
  delivery.classList.add('services-item-visible');
});

servicesGuarantee.addEventListener('click', function () {
  servicesClear();
  servicesGuarantee.classList.add('services-button-active');
  guarantee.classList.add('services-item-visible');
});

servicesCredit.addEventListener('click', function () {
  servicesClear();
  servicesCredit.classList.add('services-button-active');
  credit.classList.add('services-item-visible');
});

//Карта

let mapLink = document.querySelector('.map-link');
let modalMap = document.querySelector('.modal-map');
mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-visible');
});

let modalMapClose = document.querySelector('.modal-map-close');
modalMapClose.addEventListener('click', function () {
  modalMap.classList.remove('modal-visible');
});

modalMapClose.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27){
    modalMap.classList.remove('modal-visible');
  }
});

//Форма обратной связи

let modalContacts = document.querySelector('.modal-contacts');
let contactsButton = document.querySelector('.contacts-button');
contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContacts.classList.add('modal-visible');
});

let modalContactsClose = document.querySelector('.modal-contacts-close');
modalContactsClose.addEventListener('click', function () {
  modalContacts.classList.remove('modal-visible');
});

modalContactsClose.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27){
    modalContacts.classList.remove('modal-visible');
  }
});











