const cart = {

    elemGameList: document.querySelector('.gameList'),
    elemCart: document.querySelector('.cartItem'),
    myLi: document.querySelectorAll('#games'),
    myP: document.querySelectorAll('#gameName'),
    myBtns: document.querySelectorAll('.gameBtn'),
    price: document.querySelector('.price'),
    totalPrice: 0,
   
    
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
                const spanCreate = document.createElement('span')
                const imgCreate = document.createElement('img');
                const removeBtn = document.createElement('button');
                const pCreate = document.createElement('p');
                spanCreate.classList.add('spanPrice')
                removeBtn.classList.add('remove');
                removeBtn.innerText = 'remove';
                removeBtn.dataset.id = element.dataset.id
                removeBtn.dataset.price = element.dataset.price


                const cartLi = cartCreate;
                pCreate.innerText =  '$ '
                spanCreate.innerText = close.dataset.price
                imgCreate.src = close.dataset.src
                console.log(removeBtn.dataset.id);
                
                this.elemCart.appendChild(cartCreate)
                pCreate.appendChild(spanCreate)
                cartLi.appendChild(removeBtn)
                cartLi.appendChild(imgCreate)
                cartLi.appendChild(pCreate) 
                element.disabled = true;
                if(element.disabled = true) {
                    element.innerText = 'IN CART';
                }
                this.removeBtn();
                this.totalPrice();
            });
        });  
    },

    removeBtn () {
        const removeBtn = document.querySelectorAll('.remove');
        removeBtn.forEach(element => {     
          
            element.addEventListener('click', () => {      
                const ele = element.closest('li');
                ele.remove()
                let id = document.querySelector('[data-id='+element.dataset.id+']')
                let price = document.querySelector('[data-price='+element.dataset.price+']')
                id.removeAttribute("disabled");
               
                console.log(element.dataset.price);
                id.innerText = price;
                this.totalPrice();

            })
        })
    },

    totalPrice () {
        const cartItem = this.elemCart.querySelectorAll('.spanPrice')
        sum = 0;
        for (let i=0; i<cartItem.length; i++) {  
            sum += parseFloat(cartItem[i].innerHTML);
            this.price.innerHTML = '$ ' + sum.toFixed(2)
        }
    },

    buttonON () {
        const btns = document.querySelectorAll('.gameBtn')
        btns.forEach(element => {
            
        })
    },
             
    clearCartBtn () {
        this.elemCart.querySelector('button').addEventListener("click", () => {
            const clearAll = this.elemCart.querySelectorAll('li')
            this.price.innerText = '';
            // this.buttonON();
            clearAll.forEach(element => {
                element.remove();
            })
            this.totalPrice();
        })
    },

    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
        this.clearCartBtn();
    },
};
cart.shoppingCart();




