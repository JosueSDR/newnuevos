import axios from "axios";
const base_url = 'https://pokeapi.co/api/v2/' 

const getAllPokemon = async() =>{
    try {
        const response = await axios.get(`${base_url}pokemon/charmander`) 
        return response.data 
        
    } catch (error) {
        console.error('apendejeaste',error.message)
        throw error
    }
}

const servicePokemon = {getAllPokemon}


export default servicePokemon


