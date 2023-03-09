// book-a-table
const CLASS_LIST = {
  MODAL: 'modal',
  MODAL_ACTIVE: 'modal--active',
  MODAL_CONTENT_BODY: 'modal__content-body',
  TRIGGER_OPEN: 'js-modal-open',
  TRIGGER_CLOSE: 'js-modal-close',
};

const showScroll = (event) => {
  if (event.propertyName === 'transform') {
      document.body.style.paddingRight = '';
      document.body.style.overflow = 'visible';
    
      event.target.closest(`.${CLASS_LIST.MODAL}`).removeEventListener('transitionend', showScroll);
  }
}

document.addEventListener('click', (event) => {
  //open
  if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
      console.log('open');
      event.preventDefault();
    
      const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
      const modalId = target.getAttribute('href').replace('#', '');
      const modal = document.getElementById(modalId);
    
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
      document.body.style.overflow = 'hidden';
    
      modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }
  //close
  if (
      event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
      event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
  ) {
      console.log('close');
      event.preventDefault();
    
      const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
    
      modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    
      modal.addEventListener('transitionend', showScroll);
  }
});
   
const getScrollbarWidth = () => {
  const item = document.createElement('div');
  
  item.style.position = 'absolute';
  item.style.top = '-9999px';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.overflow = 'scroll';
  item.style.visibility = 'hidden';
  
  document.body.appendChild(item);
  const scrollBarWidth = item.offsetWidth - item.clientWidth;
  document.body.removeChild(item);
  
  return scrollBarWidth;
}