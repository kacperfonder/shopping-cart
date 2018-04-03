
document.addEventListener("DOMContentLoaded", function() { 

  
    
    elemGameList = document.querySelector('.gameList');
    elemCart = document.querySelector('.cartItem');
    elemButton = document.querySelectorAll('.gameBtn')
    myLi = document.querySelectorAll('#games');
    myP = document.querySelectorAll('#gameName')


    for (let i=0; i<myLi.length; i++ ){
        console.log(myLi);
        myLi[i].lastElementChild.innerHTML = myLi[i].dataset.price;
    }
    for (let i=0; i<myP.length; i++ ){
        console.log(myP);
        myP[i].innerHTML = myLi[i].dataset.name;
    }
    
  

})
    
