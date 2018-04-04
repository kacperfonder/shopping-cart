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
                const ele = element.closest('li');
                console.log('zaraz cie usune!');
                ele.remove()
            })
        })
    },
    addingCartItems () {
        const cartItem = this.elemCart.querySelectorAll('p')
        const price = this.elemCart.querySelector('.price')
        let sum = ''
        
        cartItem.forEach(element => {

            sum += element;
           
            console.log(sum);
            price.innerHTML = sum; 
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

                const cartLi = cartCreate
                const cartName = close.dataset.name
                const price = close.dataset.price

                cartPrice.innerText = price 
                cartCreate.innerText = cartName 
                removeBtn.innerText = 'remove'
                removeBtn.classList.add('remove');
                imgCreate.src = close.dataset.src
                
                console.log(cartLi); 

                this.elemCart.appendChild(cartCreate)
                cartLi.appendChild(removeBtn)
                cartLi.appendChild(cartPrice)
                cartLi.appendChild(imgCreate)
                element.disabled = true;
                this.removeBtn();
                this.addingCartItems();
            });
        });  
    },
    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
      
       
    },
};
cart.shoppingCart();




