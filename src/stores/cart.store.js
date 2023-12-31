import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        productCartList: localStorage.getItem("cart") || [],
        cartStatus: false
    }),
    getters: {
        productList: state => {
            if (state.productList) {
                return productList
            }
            return null;
        },
        isCartOpen: state => {
            return state.cartStatus
        }
    },
    actions: {
        setCartOpen() {
            this.cartStatus = true;
        },
        setCartClose() {
            this.cartStatus = false;
        },
        addToCart(product, size, qty, color) {
            const _this = this;
            _this.productCartList.push({ product: product, size: size, qty: qty, color: color })
        },
        removeOne(productID) {
            const list = this.state.productCartList
            const index = list.findIndex((product) => product._id === productID)
            list.splice(index, 1);
            this.state.productCartList = list;
        },
        changeQtyProduct(productID, qty) {
            this.state.productCartList.forEach(e => {
                if (e._id === productID) {
                    e.qty = qty;
                }
            })
        },
        increaseQty(productID) {
            this.state.productCartList.forEach(e => {
                if (e._id === productID) {
                    e.qty--;
                }
            })
        },
        decreaseQty(productID) {
            this.state.productCartList.forEach(e => {
                if (e._id === productID) {
                    e.qty++;
                }
            })
        },
        removeAfterCheckout() {
            this.state.productCartList = [];
        }
    }
});