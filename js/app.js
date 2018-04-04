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
    removeBtn () {
        const removeBtn = document.querySelectorAll('.remove');
            removeBtn.forEach(element => {
                element.addEventListener('click', () => {
                    
                })
            })
    },
 
    btnsOnClick () { 
        this.myBtns.forEach(element => {
            element.addEventListener('click', () => {
             
                const close = element.closest('li');
                const cartCreate = document.createElement('li');
                const imgCreate = document.createElement('img');
                const cartPrice = document.createElement('p');
                const removeBtn = document.createElement('button');
                removeBtn.classList.add('remove')
                const cartName = close.dataset.name
                const price = close.dataset.price
                imgCreate.src = close.dataset.src


                this.elemCart.appendChild(removeBtn)
                this.elemCart.appendChild(cartPrice)
                this.elemCart.appendChild(cartCreate)
                this.elemCart.appendChild(imgCreate)
                cartPrice.innerText = ' $ ' + price 
                cartCreate.innerText = cartName 
                removeBtn.innerText = 'remove'
              
            });
        });  
    },
    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
    },
};
cart.shoppingCart();




