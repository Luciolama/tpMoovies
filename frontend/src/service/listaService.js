import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://6536e8fabb226bb85dd2b980.mockapi.io/moovies',
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    async loadMoovies(){
        try{
            const response = await apiClient.get('/');
            return response.data
        } catch(error){
            throw "error de Conexión"
        }
    },
    async sendMoovie(elem){
        try{
            await apiClient.post('/', elem)
        }catch(error){
            throw "error de Conexión"
        }
    }
}

