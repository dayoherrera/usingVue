// Creando la instancia de Vue con new
new Vue({
    el: '#app', // pasar por parámetro el objeto

    data () {
        return {
            name: 'Bitcoin',
            img: 'https://claveprivada.com/wp-content/uploads/2018/10/1024px-Bitcoin.svg-800x800.png',
            changePercent: -1
        }
    }
})