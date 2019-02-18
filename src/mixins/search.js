import axios from "axios"
import cherio from "cherio"

const searchMixin  = {
    created: function () {
        console.log('searching....')
    },
    methods: {
        postToBackEnd: function (data) {
            try {
                console.log(cherio)
                const res = axios.get(`https://www.google.com/search?q=${data}`)
                    .then(data => {
                        console.log(data)
                    })
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default searchMixin