// Creando la instancia de Vue con new
new Vue({
    el: '#app', // pasar por parámetro el objeto

    data () {
        return {
            name: 'Bitcoin',
            img: 'https://claveprivada.com/wp-content/uploads/2018/10/1024px-Bitcoin.svg-800x800.png',
            changePercent: 1,
            price: 8200,
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 }
            ],
            showPrices: false
        }
    },
    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices;
        }
    }
})