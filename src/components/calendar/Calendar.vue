<template>
    <div class="cal">
        <DatePicker :attributes="attrs"  color="red"/>
    </div>
</template>

<script>
import{ Calendar , DatePicker } from 'v-calendar'
import axios from 'axios'
    export default {
        name: 'Calendari',
        components: {Calendar,DatePicker},
        props:['soba'],
        data() {
            return{
                datumi:[],
            }
        },
        computed:{
            attrs(){
                return [ 
                    ...this.datumi.map(item => ({
                    highlight: true,
                    dates: item,
                }))
                ]
            }
        },
        methods:{
            resultMap(result){
                result.map(item => {
                    const obj = {
                        start: new Date(item.checkIn),
                        end: new Date(item.checkOut)
                    }
                    this.datumi.push(obj)
                })
            }
            
        },
        mounted(){
            const fetchSobe = async() => {
                  const soba = {
                    id: this.soba
                }
                
                const result = await axios.post('http://localhost:5000/zauzetesobecalendar',soba)
                
                if(this.datumi.length > 0){
                    this.datumi.splice(0,this.datumi.length)
                    this.resultMap(result.data)                    
                
                }else{
                    this.resultMap(result.data)
                }
        
            }
            fetchSobe()
        }
    }
</script>

<style scoped>
    
    .vc-container{
        width:100%;
    }
</style>