//using components
Vue.component('coin-detail', 
    {   
        props: ['coin'],
        data(){
            return {
                showPrices: false,
                value: 0,
            }
        },
        template: `
        <div>
            <img v-on:mouseover="toggleShowPrices()" v-on:mouseout="toggleShowPrices()" v-bind:src="coin.img" v-bind:alt="coin.name" width="45px">

            <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
            {{ title }}
            <span v-if="coin.changePercent > 0">👍</span>
            <span v-else-if="changePercent < 0">👎</span>
            <span v-else>🤞</span>
            <span v-on:click="toggleShowPrices()">{{ showPrices ? '🙉' : '🙈' }}</span>
            </h1>

            <input type="number" v-model="value">
            <span>{{convertedValue}}</span>

            <ul v-show=showPrices>
                <li 
                v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price}" v-for="(p, i) in coin.pricesWithDays" v-bind:key="p.value">{{i+1}} - {{p.day}} - {{p.value}} </li>
            </ul>
        </div>
        `,
        methods: {
            toggleShowPrices(){
                this.showPrices = !this.showPrices;

                this.$emit('change-color',
                this.showPrices ? 'ffe396' : '3d3d3d');
            }
        },
        computed: { // propiedad computada
    
            convertedValue(){ // Two-Way Data Binding
                if(!this.value){
                    return 0;
                }else{
                    return (this.value /this.coin.price);
                }
            },
            title(){
                return `${this.coin.name} - ${this.coin.symbol}`
            }
        }
    }
);

// Creando la instancia de Vue con new
new Vue({
    el: '#app', // pasar por parámetro el objeto

    data () {
        return {

            btc:{
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://claveprivada.com/wp-content/uploads/2018/10/1024px-Bitcoin.svg-800x800.png',
                changePercent: -1,
                price: 8200,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 }
                ]
            },
            color: 'f4f4f4'
        }
    },
    methods:{
        updateColor(color){
            this.color = color || this.color.split('').reverse().join('');
        }
    }
})