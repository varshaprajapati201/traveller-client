import axios from "axios"; 
//import { getAccessToken } from "../utils/common-utils.js";

const URL="https://traveller-ruts.onrender.com";


export const addArticle= async (data)=>{
    try{
 return await axios.post(`${URL}/Compose`,data,{mode:'cors'});
    }catch (error){
        console.log("error while calling addArticle Api",error);
    }
}

export const getArticle = async () =>{
    try{
        return await axios.get(`${URL}/all`); 
    }catch(error){
        console.log("error while calling get Article api ", error);
    }
    
    }

    export const deleteArticle = async (id)=>{
        try{
    return await axios.delete(`${URL}/${id}`);
        }catch(error){
            console.log("error while calling delete Article api ", error);
        }
    }

    export const getArticleById = async (id) => {
         try{
       return await axios.get(`${URL}/detailView/${id}`)
         }catch(error){
            console.log("error while calling get Article by id api ", error);
         }
    }

    export const getArticleToEdit = async (id)=> {
        try{
    return await axios.get(`${URL}/${id}`);
        }catch(error){
            console.log("error while calling get Article to edit api ", error);
        }
    }
    
    
    export const editArticle = async (article,id)=>{
        try{
    return await axios.post(`${URL}/${id}`,article);
        }catch(error){
            console.log("error while calling edit Article api ", error);
        }
    }
    
