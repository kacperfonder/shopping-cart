const cart = {

    elemGameList: document.querySelector('.gameList'),
    elemCart: document.querySelector('.cartItem'),
    myLi: document.querySelectorAll('#games'),
    myP: document.querySelectorAll('#gameName'),
    myBtns: document.querySelectorAll('.gameBtn'),
    price: document.querySelector('.price'),
 
    
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
                const ele = element.closest('li');
                ele.remove()
                this.totalPrice();
                this.buttonON()
            })
        })
    },
    buttonON () {
        const buttons = this.elemGameList.querySelectorAll('button');
        buttons.forEach(e => {
            if(e.disabled = true) {
                e.disabled = false;
            }
        })
    },
   
    clearCartBtn () {
        this.elemCart.querySelector('button').addEventListener("click", () => {
            const clearAll = this.elemCart.querySelectorAll('li')
            this.price.innerText = ''
            clearAll.forEach(element => {
                element.remove();
            })
            this.buttonON();
        })
    },
    totalPrice () {
        const cartItem = this.elemCart.querySelectorAll('p')
        let sum = 0;
     
        for (let i= 0; i<cartItem.length; i++) {       
            sum += parseFloat(cartItem[i].innerHTML);
            this.price.innerHTML = '$ ' + sum;
        }
    },
    
    btnsOnClick () { 
        this.myBtns.forEach(element => {
            element.addEventListener('click', () => {
             
                const close = element.closest('li');
             
                const cartCreate = document.createElement('li');
                const imgCreate = document.createElement('img');
                const cartPrice = document.createElement('p');
                const removeBtn = document.createElement('button');

                const cartLi = cartCreate;
                
                cartPrice.innerText =  close.dataset.price
                cartCreate.innerText = close.dataset.name;
                removeBtn.innerText = 'remove'
                removeBtn.classList.add('remove');
                imgCreate.src = close.dataset.src
                
                this.elemCart.appendChild(cartCreate)
                cartLi.appendChild(removeBtn)
                cartLi.appendChild(imgCreate)
                cartLi.appendChild(cartPrice) 
                element.disabled = true;
                if(element.disabled = true) {
                    element.innerText = 'IN CART';
                }
                this.removeBtn();
                this.totalPrice();
                console.log(cartPrice);
            });
        });  
    },
    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
        this.clearCartBtn();
    },
};
cart.shoppingCart();




