const { createApp, ref, computed, reactive, toRefs } = Vue

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        const count = {}

        const cartCount = computed(() => {
            const count = cart.value.reduce((acc, id) => {
                acc[id] = (acc[id] || 0) + 1;
                return acc;
            }, {})
            return count
        })
        
        function updateCart(id) {
            cart.value.push(id)
        }

        function removeItemFromCart(id) {
            cart.value.pop(id)
        }

        return {
            cart,
            premium,
            updateCart,
            cartCount,
            removeItemFromCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

app.mount('#app')