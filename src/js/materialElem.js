(function(){
    /**
     * @function popup 
     * Modal popup
     */
     (()=>{
      let dialog = document.querySelector(`dialog`);
      
      setTimeout(()=> dialog.showModal(), 500);

      dialog.querySelector(`#closePopup`).addEventListener(`click`, function() {
          dialog.close();
        });
     })()

         
        const openMenu = document.querySelector(`#openFiguresBar`);
        const closeMenu = document.querySelector(`#closeFiguresBar`);
        const Menu = document.querySelector(`.bottom-toolbar__figures_menu`);
 
         openMenu.onclick = () => {
           if(Menu){
             Menu.classList.add(`open`);
           }
         };

         closeMenu.onclick = () => {
          if(Menu){
            Menu.classList.remove(`open`);
          }
        };
})()