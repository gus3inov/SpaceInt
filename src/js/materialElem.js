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
})()