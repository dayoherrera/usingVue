Vue.component('modal', {
    data(){
      return{
        title: 'Titulo Modal'
      }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <slot name="body"></slot>
            <footer>
              <button v-on:click="closeF()">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`,
    methods:{
      closeF(){
        this.$emit('close');
      }
    }
  })
  
  new Vue({
    el: '#app',
    data(){
      return{
        showModal: true
      }
    },
    methods:{
      closeModal(){
        this.showModal = !this.showModal;
      }
    }
  })