new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        title: '',
        time: 0
      }
    },
    
    computed: {
      totalTime(){
        let timeT = 0; 
        this.courses.forEach((item) => {
        timeT += parseInt(item.time);
      })
        return timeT;
      }
    },
    
    methods: {
      addCourse(){
        this.courses.push({ title: this.title, time: this.time        });
        this.title = '';
        this.time = 0;
        
      }
    }
  })