var vm = new Vue({
    el: '#app',

    data: {
        showImage: false
    },

    methods: {
        showimageClick() {
            this.showImage = true
        }
    }
})