const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('assets/images/socks_green.jpg')
        const url = ref('https://www.camt.cmu.ac.th/en/home/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green'},
            { id: 2235, color: 'blue'}
        ])
        const sizes = ref([
            { id: 2236, size: 'S'},
            { id: 2237, size: "M"},
            { id: 2238, size: "L"}
        ])
        return {
            product,
            image,
            url,
            inventory,
            details,
            onSale,
            variants,
            sizes
        }
    }
}).mount('#app')