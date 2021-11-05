var List = {
	template: `<div>
    <ul class="menu p-3 shadow-lg bg-primary rounded-box">
        <li class="text-xl">
            <span>
                Best {{ top.title }}
				<i class="fas ml-2" :class="['fa-'+ top.icon]"></i>
            </span>
        </li>
        <li v-for="element of top.list" class="py-2">
            <div class="collapse w-full border rounded-box border-base-300 collapse-arrow">
                <input type="checkbox"> 
                <div class="collapse-title text-xl font-medium">
                    {{ element.name }}
                </div> 
                <div class="collapse-content"> 
                    <p>{{ element.description }}</p>
					<a class="link link-secondary" :href="element.link" target="_blank">Lien Wiki</a>
					<img class="m-auto" :src="element.img">
                </div>
              </div> 
            <div>
        </li>
    </ul>
</div>`,
	data () {
        return {
            top: {},
        }
        
    },
    mounted () {
        this.top = JSON.parse(localStorage.tops_axel_a).filter(top => top.title === this.$route.params.topTitle)[0]
    }
};