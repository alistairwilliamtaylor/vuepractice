const app = Vue.createApp({
    data() {
        return {
            firstName: 'Alistair',
            lastName: 'Taylor',
            email: 'alistair@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    }
})

app.mount('#app')