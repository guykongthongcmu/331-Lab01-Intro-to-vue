const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const url = ref('https://www.camt.cmu.ac.th/en/home/')
        const inventory = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50, onSale: true},
            { id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 0, onSale: false}
        ])

        const selectedVariant = ref(0)

        const sizes = ref([
            { id: 2236, size: 'S'},
            { id: 2237, size: "M"},
            { id: 2238, size: "L"}
        ])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }

        function updateStockStatus() {
            inStock.value = !inStock.value
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })

        const onSale = computed(() => {
            if (variants.value[selectedVariant.value].onSale)
                return brand.value + ' ' + product.value + ' ' + "is on sale"
            else 
                return brand.value + ' ' + product.value + ' ' + "is not on sale"
        })
        return {
            title,
            image,
            url,
            inStock,
            inventory,
            details,
            onSale,
            variants,
            sizes,
            cart,
            addToCart,
            updateStockStatus,
            updateVariant
        }
    }
}).mount('#app')