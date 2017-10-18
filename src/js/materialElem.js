(function(){
    /**
     * @function popup 
     * Modal popup
     */
    
     const popup = () =>{
        let dialog = document.querySelector('dialog');
        
        setTimeout(()=> dialog.showModal(), 500);

        dialog.querySelector('#closePopup').addEventListener('click', function() {
            dialog.close();
          });
     }
   popup();

   const notify = () => {
    let snackbarContainer = document.querySelector('#demo-snackbar-example');
    let showSnackbarButton = document.querySelector('#demo-show-snackbar');
    let handler = function(event) {
      showSnackbarButton.style.backgroundColor = '';
    };
    showSnackbarButton.addEventListener('click', function() {
      'use strict';
      showSnackbarButton.style.backgroundColor = '#' +
          Math.floor(Math.random() * 0xFFFFFF).toString(16);
      var data = {
        message: 'Button color changed.',
        timeout: 2000,
        actionHandler: handler,
        actionText: 'Undo'
      };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
   }

   notify();
})()