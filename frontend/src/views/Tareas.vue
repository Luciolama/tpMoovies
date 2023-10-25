<template>
   
  <div>
    <div v-for="list in lista" :key="list.id">
        <p>
            {{ list.nombrePelicula }}
        </p>
       
    </div>
    <button @click="cargarPeliculas">Cargar Data</button>
    <div>
        <input v-model="moovie.nombrePelicula" placeholder="moovie's name" >
        <input v-model="moovie.id" placeholder="moovie's id" >
        <button @click="sendData"> Enviar data </button>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import listaService from '../service/listaService'

export default {
    data(){
        return{
            lista :[],
            error : '',
            moovie : {
                nombrePelicula : "",
                id : 0
            }
        }
    },
    //mounted(){
      //  this.cargarPeliculas()
    
    methods : {
        async cargarPeliculas(){
            try{
                this.lista = await listaService.loadMoovies();         

            }catch(e){
                this.error = "no se pudo"
                console.log(this.error);
            }
            
        },
        async sendData(){
            
            try{
                await listaService.sendMoovie(this.moovie)
                this.cargarPeliculas()
                this.pelicula={}
            }catch(e){
                console.log(e.message);
            }
            this.moovie = {}
        },
        addPelicula(){
            this.lista.push(this.pelicula)
            this.pelicula = {}
            console.log(this.lista);
        }
    }

}
</script>

<style>

</style>