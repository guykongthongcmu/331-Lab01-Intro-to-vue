const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('assets/images/socks_green.jpg')
        const url = ref('https://www.camt.cmu.ac.th/en/home/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        return {
            product,
            image,
            url,
            inventory,
            onSale
        }
    }
}).mount('#app')