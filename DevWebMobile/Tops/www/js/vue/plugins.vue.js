var Plugins = {
    template: `<div>

    <h1 class="text-primary text-lg">Plugin de Caméra</h1>
    <button class="btn btn-primary" @click="enableCamera()">Tester la caméra</button>

    <h1 class="text-primary text-lg">PLugin de localisation</h1>

    <label for="modal-location" class="btn btn-primary modal-button">Afficher la localisation</label>
    <input type="checkbox" id="modal-location" class="modal-toggle">
    
    <div class="modal">
        <div class="modal-box">
        <ul>
            <li v-for="element of loc"> {{ element }}</li>
        </ul>
            <div class="modal-action">

                <label for="modal-location" class="btn btn-primary">Fermer</a>
                </div>
            </div>
        </div>
    </div>

    
</div>`,
    data() {
        return {
            loc: 'Location loading'
        }
    },
    created() {
        this.showLocation()
    },
    methods: {
        showLocation() {
            navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError)
        },
        geolocationSuccess(position) {
            this.loc = ('Latitude: ' + position.coords.latitude + '\n' +
                'Longitude: ' + position.coords.longitude + '\n' +
                'Altitude: ' + position.coords.altitude + '\n' +
                'Accuracy: ' + position.coords.accuracy + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                'Heading: ' + position.coords.heading + '\n' +
                'Speed: ' + position.coords.speed + '\n' +
                'Timestamp: ' + position.timestamp + '\n').split('\n')
        },
        geolocationError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        },
        cameraSuc(cameraInfos) {
            console.log(cameraInfos)
        },
        enableCamera() {
            navigator.camera.getPicture(this.cameraSuc)
        }
    }

};