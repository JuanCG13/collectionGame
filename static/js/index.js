var vm = new Vue({
    el: '#app',

    data: {
        showImage: false,
        urlImage: [
            {
                url: 'static/assets/collectables/messi.jpg',
                probability: 90
            },
            {
                url: 'static/assets/collectables/gokuUltra.jpg',
                probability: 50
            },
            {
                url: 'static/assets/collectables/narutoChico.jpg',
                probability: 10
            },
            {
                url: 'static/assets/collectables/rockLeeChico.png',
                probability: 10
            },
            {
                url: 'static/assets/collectables/sakuraChica.jpg',
                probability: 10
            },
            {
                url: 'static/assets/collectables/sasukeChico.jpeg',
                probability: 10
            },
            {
                url: 'static/assets/collectables/ronaldo.jpg',
                probability: 10
            },
            {
                url: 'static/assets/collectables/vegetaSSJBLUE.png',
                probability: 10
            }
        ],
        selectImage: ''
    },

    methods: {
        showimageClick() {
            this.showImage = true ? this.showImage === false : false
            const randomElement = this.urlImage[Math.floor(Math.random() * this.urlImage.length)];
            this.selectImage = randomElement.url
        },
        reset() {
            this.showImage = false
        }
    }
})