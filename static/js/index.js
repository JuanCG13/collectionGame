var vm = new Vue({
    el: '#app',

    data: {
        showImage: false,
        urlImage: [
            {
                url: 'static/assets/collectables/messi.jpg',
                probability: 90,
                name: 'Messi',
                count: 1
            },
            {
                url: 'static/assets/collectables/gokuUltra.jpg',
                probability: 50,
                name: 'Goku Ultra Instinto',
                count: 1
            },
            {
                url: 'static/assets/collectables/narutoChico.jpg',
                probability: 10,
                name: 'Naruto',
                count: 1
            },
            {
                url: 'static/assets/collectables/rockLeeChico.png',
                probability: 10,
                name: 'Rock Lee',
                count: 1
            },
            {
                url: 'static/assets/collectables/sakuraChica.jpg',
                probability: 10,
                name: 'Sakura',
                count: 1
            },
            {
                url: 'static/assets/collectables/sasukeChico.jpeg',
                probability: 10,
                name: 'Sasuke',
                count: 1
            },
            {
                url: 'static/assets/collectables/ronaldo.jpg',
                probability: 10,
                name: 'Ronaldo',
                count: 1
            },
            {
                url: 'static/assets/collectables/vegetaSSJBLUE.png',
                probability: 10,
                name: 'Vegeta SSJ Blue',
                count: 1
            }
        ],
        selectImage: '',
        listCount: [],
    },

    methods: {
        showimageClick() {
            this.showImage = true ? this.showImage === false : false
            const randomElement = this.urlImage[Math.floor(Math.random() * this.urlImage.length)]
            let index = 0
            this.selectImage = randomElement
            if (!this.listCount.length) {
                this.listCount.push(randomElement)
            } else {
                index = this.listCount.indexOf(randomElement)
                // console.log(index)
                if (index > -1) {
                    randomElement.count += 1
                    this.listCount[index] = randomElement
                } else {
                    this.listCount.push(randomElement)
                }

            }

            this.listCount.sort(function (a, b) { return b.count - a.count });



        },

        reset() {
            this.showImage = false
        }
    }
})