const cart = {
    elemGameList: document.querySelector('.gameList'),
    elemCart: document.querySelector('.cartItem'),
    myLi: document.querySelectorAll('#games'),
    myP: document.querySelectorAll('#gameName'),
    myBtns: document.querySelectorAll('.gameBtn'),

    generateBtns () {
        for (let i=0; i<this.myBtns.length; i++ ){
            this.myBtns[i].innerHTML = '$ ' + this.myLi[i].dataset.price;
        }
        for (let i=0; i<this.myP.length; i++ ){
            this.myP[i].innerHTML = this.myLi[i].dataset.name;
        }
     
    },
 
    btnsOnClick () { 
        this.myBtns.forEach(element => {
            element.addEventListener('click', () => {
             
                const close = element.closest('li');
                const cartCreate = document.createElement('li');
                const imgCreate = document.createElement('img')
                imgCreate.src = close.dataset.src
                const cartName = close.dataset.name
                const cartPrice = close.dataset.price
                console.log(close.dataset.name);
                this.elemCart.appendChild(cartCreate)
                this.elemCart.appendChild(imgCreate)
                cartCreate.innerText = cartName + ' $ ' + cartPrice 
                
              
            });
        });  
    },
    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
    },
};
cart.shoppingCart();




