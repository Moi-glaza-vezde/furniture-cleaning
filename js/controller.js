import data from './model.js';
import { renderData, actionHeaderItem, deleteActionHeaderItem } from './view.js';
import { elements } from './view.js';

renderData(data);

//--функционал хедер
elements.btnBurger.addEventListener('click', function () {
   elements.btnString.classList.toggle('header__string-menu-active');
   elements.nav.classList.toggle('header__nav--active');
   if (elements.btnString.classList.contains('header__string-menu-active')) {
      elements.blackWindow.style.display = 'block';
   } else {
      elements.blackWindow.style.display = 'none';
   }
});
//--------активные элементы в хедере

elements.nav.addEventListener('click', function (event) {
   elements.nav.classList.remove('header__nav--active');
   elements.btnString.classList.remove('header__string-menu-active');
   elements.blackWindow.style.display = 'none';

   if (event.target.closest('#headerItem1')) {
      actionHeaderItem(elements.headerItem1);
      deleteActionHeaderItem(elements.headerItem2);
      deleteActionHeaderItem(elements.headerItem3);
   }
   if (event.target.closest('#headerItem2')) {
      actionHeaderItem(elements.headerItem2);
      deleteActionHeaderItem(elements.headerItem1);
      deleteActionHeaderItem(elements.headerItem3);
   }
   if (event.target.closest('#headerItem3')) {
      actionHeaderItem(elements.headerItem3);
      deleteActionHeaderItem(elements.headerItem1);
      deleteActionHeaderItem(elements.headerItem2);
   }
});
//------------
