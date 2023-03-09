import axios from "axios"; 

const URL="https://traveller-ruts.onrender.com";

export const register = async (signUp)=>{
    try{
 return await axios.post(`${URL}/register`,signUp);
    }catch (error){
       console.log("error while calling user signup Api",error);
        return 500;
    }
}

export const login = async (loginDetail)=>{
    try{
 return await axios.post(`${URL}/login`,loginDetail);
    }catch (error){
       console.log("error while calling user login Api",error);
        return 500;
    }
}

