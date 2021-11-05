var Creation = {
	template: `<div class="card bordered bg-primary">
    <div class="card-body">
        <h1 class="text-xl card-title">Création</h1>
        <div class="form-control">
            <label for="title" class="label">
                <span class="label-text">Titre du top</span>
            </label>
            <input type="text" id="title" v-model="top.title" placeholder="titre du top"
                class=" input input-primary input-bordered" />
        </div>

        <div class="alert mt-6">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" class="w-6 h-6 mx-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
              </svg> 
              <label><a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2" target="_blank">Liste des iconnes (e.g : dragon)</a></label>
            </div>
          </div>

        <div class="form-control">
            <label for="icon" class="label">
                <span class="label-text">Icône</span>
            </label>
            <input type="text" id="icon" v-model="top.icon" placeholder="icône"
                class="input input-primary input-bordered" />
        </div>

        <h2 class="text-xl mt-2">Liste des éléments</h2>

        <div v-for="(element, index) of top.list">
            <h3 class="text-lg mt-8">Element #{{index+1}}</h3>
            <div class="form-control">
                <label :for="'name'+index" class="label">
                    <span class="label-text">titre de l'élément</span>
                </label>
                <input type="text" :id="'name'+index" v-model="element.name" placeholder="titre de l'élément"
                    class="input input-primary input-bordered" />
            </div>

            <div class="form-control">
                <label :for="'description'+index" class="label">
                    <span class="label-text">Description</span>
                </label>
                <input type="text" :id="'description'+index" v-model="element.description" placeholder="description"
                    class=" input input-primary input-bordered" />
            </div>

            <div class="form-control">
                <label :for="'link'+index" class="label">
                    <span class="label-text">Lien wiki ou autre</span>
                </label>
                <input type="text" :id="'link'+index" v-model="element.link" placeholder="lien"
                    class=" input input-primary input-bordered" />
            </div>

            <div class="form-control">
                <label :for="'img'+index" class="label">
                    <span class="label-text">Url de l'image</span>
                </label>
                <input type="text" :id="'img'+index" v-model="element.img" placeholder="url"
                    class=" input input-primary input-bordered" />
            </div>

        </div>
        <div class="mt-2">
            <button class="btn btn-secondary mx-1" @click="addElement()"><i class="fas fa-plus mr-2"></i>Ajouter un
                élement</button>
            <button class="btn btn-secondary mx-1" @click="addTop()">Créer le top</button>
        </div>

    </div>
</div>`,
	data () {
        return {
            top: {
				title: undefined,
				list: [{
					name: undefined,
					description: undefined,
					link: undefined,
				}]
			},
        }
        
    },
	methods: {
		addElement () {
			this.top.list.push({
				name: undefined,
				description: undefined,
				link: undefined,
			})
		},
		addTop () {
			let tops = JSON.parse(localStorage.tops_axel_a)
			tops.push(this.top)
			localStorage.tops_axel_a = JSON.stringify(tops);
			this.$router.push({ path: '/list/' + this.top.title }) 
		}
	},
};