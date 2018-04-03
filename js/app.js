const cart = {
    elemGameList: document.querySelector('.gameList'),
    elemCart: document.querySelector('.cartItem'),
    myLi: document.querySelectorAll('#games'),
    myP: document.querySelectorAll('#gameName'),
    myBtns: document.querySelectorAll('.gameBtn'),

    generateBtns () {
        for (let i=0; i<this.myBtns.length; i++ ){
            this.myBtns[i].innerHTML = this.myLi[i].dataset.price + ' €';
        }
        for (let i=0; i<this.myP.length; i++ ){
            this.myP[i].innerHTML = this.myLi[i].dataset.name;
        }
     
    },
 
    btnsOnClick () { 
        // let self = this
        this.myBtns.forEach(element => {
            element.addEventListener('click', () => {

                const cartCreate = document.createElement('li');
                // const cartName = element.dataset.name
                const cartName = this.myLi['0'].dataset.name
                this.elemCart.appendChild(cartCreate)
                console.log(cartName);
                
                cartCreate.innerText = cartName
                // cartCreate.innerText = this.myLi.dataset

               
                

               
 
            });
        });  
    },
    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
    },
};
cart.shoppingCart();




