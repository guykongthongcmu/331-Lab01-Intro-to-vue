const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('Footwear for all terain use-cases!')
        return {
            product,
            productDescription
        }
    }
}).mount('#app')