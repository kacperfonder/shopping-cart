const cart = {

    elemGameList: document.querySelector('.gameList'),
    elemCart: document.querySelector('.cartItem'),
    myLi: document.querySelectorAll('#games'),
    myP: document.querySelectorAll('#gameName'),
    myBtns: document.querySelectorAll('.gameBtn'),
    price: document.querySelector('.price'),
    cartInfo: document.querySelector('.cartInfo'),
    sum: 0,

    generateBtns() {
        for (let i = 0; i < this.myBtns.length; i++) {
            this.myBtns[i].innerHTML = '$ ' + this.myLi[i].dataset.price;
        }
        for (let i = 0; i < this.myP.length; i++) {
            this.myP[i].innerHTML = this.myLi[i].dataset.name;
        }
    },

    btnsOnClick() {
        this.myBtns.forEach(element => {
            element.addEventListener('click', () => {

                const close = element.closest('li');

                const cartCreate = document.createElement('li');
                const spanCreate = document.createElement('span')
                const imgCreate = document.createElement('img');
                const removeBtn = document.createElement('button');
                const div = document.createElement('div')
                const pCreate = document.createElement('p');
                spanCreate.classList.add('spanPrice')
                removeBtn.classList.add('remove');
                removeBtn.innerText = 'remove';
                removeBtn.dataset.id = element.dataset.id
                removeBtn.dataset.btnprice = element.dataset.btnprice

                pCreate.innerText = close.dataset.name
                spanCreate.innerText = "$ " + close.dataset.price
                spanCreate.dataset.price = close.dataset.price
                imgCreate.src = close.dataset.src

                this.elemCart.appendChild(cartCreate);
                cartCreate.appendChild(imgCreate);
                cartCreate.appendChild(div);
                cartCreate.appendChild(spanCreate);
                div.appendChild(pCreate);
                div.appendChild(removeBtn);
                element.disabled = true;
                if (element.disabled = true) {
                    element.innerText = 'IN CART';
                }
                this.counter++;
                this.removeBtn();
                this.totalPrice();
            });
        });
    },
    removeBtn() {
        const removeBtn = document.querySelectorAll('.remove');
        removeBtn.forEach(element => {

            element.addEventListener('click', () => {
                const ele = element.closest('li');
                ele.remove()
                let id = document.querySelector('[data-id=' + element.dataset.id + ']')
                id.removeAttribute("disabled");
                id.innerText = "$ " + element.dataset.btnprice;
                this.totalPrice();
            })
        })
    },

    totalPrice() {
        const cartItem = this.elemCart.querySelectorAll('.spanPrice');
        let inCart = document.querySelector('.inCart');
        this.sum = 0.00;

        for (let i = 0; i <= cartItem.length; i++) {
            if (cartItem.length === 0) {
                this.sum = 0.00;
            } else {
                this.sum += parseFloat(cartItem[i].dataset.price);
            }

            let counter = document.querySelector('.counter');

            this.price.innerHTML = '$ ' + this.sum.toFixed(2);

            counter.innerHTML = cartItem.length;
            inCart.innerHTML = cartItem.length + ' ITEMS IN CART';
        }
    },
    clearCartBtn() {
        this.cartInfo.querySelector('button').addEventListener("click", () => {
            const clearAll = this.elemCart.querySelectorAll('li');
            this.price.innerText = '';
            this.counter = 0;
            clearAll.forEach(element => {
                element.remove();
            })
            let buttons = this.elemGameList.querySelectorAll('button');
            buttons.forEach(e => {
                e.innerText = "$ " + e.dataset.btnprice
                if (e.disabled = true) {
                    e.disabled = false;
                };
            });
            this.totalPrice();
        });
    },

    shoppingCart() {
        this.generateBtns();
        this.btnsOnClick();
        this.clearCartBtn();
        this.totalPrice();
    },
};
cart.shoppingCart();




