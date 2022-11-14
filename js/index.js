const url = 'https://webapicar20190326034339.azurewebsites.net/api/cars'

const app = Vue.createApp({
    data() {
        return {
            // add data here
            cars: []
        }
        
    },

    methods: {
        GetAllCars(){
            axios.get(url)
            .then(response => {
                console.log(response.status)
                console.log(response.statusText)
                console.log('*****')

                this.cars = response.data

                this.cars.forEach(element => {
                    console.log(element)                    
                });
                console.log('*****')

            })
            .catch(error =>{
                if (error.response) {
                    console.log(error.response.status)
                    console.log(error.response.statusText)
                    console.log('*****')
                }
                else if (error.request) {
                    console.log(error.request)
                }
                else {
                    console.log("Error", error.message)
                }
            })
            

            
        }
    }
    
})