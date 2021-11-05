var Home = {
	template: `
    <div>
    <ul class="menu py-3 shadow-lg bg-primary rounded-box">
    <li class="menu-title">
        <span>
            Liste tops
            </span>
      </li>    
      <li v-for="top of tops">
      <router-link class="nav-link" :to="'/list/' + top.title">
      <i class="fas mr-2" :class="['fa-'+ top.icon]"></i>
      {{top.title}}
      </router-link>
      </li>         
    </ul>
  </div>`,
    data () {
        return {
            tops: [],
        }
        
    },
    async mounted () {
        if (localStorage.tops_axel_a) {
            this.tops = JSON.parse(localStorage.tops_axel_a);
        } else {
            await axios.get('api/tops.json').then(data =>
                this.tops = data.data
            )
            localStorage.tops_axel_a = JSON.stringify(this.tops)
        }
    }
};