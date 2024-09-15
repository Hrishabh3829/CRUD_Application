import axios from "axios";

const URL = '';

export const addUser = async (data) =>{    
    try{
       return await axios.post( `${URL}/Add`,data);

    }
    catch(error){
        console.log('Error while calling add user api',error);
    }
}