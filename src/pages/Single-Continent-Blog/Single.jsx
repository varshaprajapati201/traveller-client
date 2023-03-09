import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { deleteArticle, getArticle } from "../../services/article-api";
import {addElipsis} from "../../utils/common-utils.js"
import { DataContext, DataProvider } from "../../context/DataProvider"
import Button from '@mui/material/Button'; 




const Text = styled('h6')`
color: #878787;
font-size: 12px;

`


export const BlogsByCategory=(props)=>{

    const [articles,setArticles]= useState([]);
    const {account} = useContext(DataContext);

    useEffect(()=>{
        getAllArticle();
      },[]);
      
      const getAllArticle = async () => {
        let response = await getArticle();
        console.log(response.data);
        if(response.data.category===props.category){
        setArticles(response.data);
        }
      }

      const deleteArticleDetail = async (id)=>{
        await deleteArticle(id);
        getAllArticle();
      }


    return (
<div >
<section id="blog-cat-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="BlogByCatSection-title ">{props.cat}</h2>
    </section>

    <Container>
    { articles.map(article => {
       if(article.category === props.cat){
     return  (<>
        <Text>By {article.username} on {new Date(article.createdDate).toDateString()}</Text>
              <h2>{article.title}</h2>
              <p>{addElipsis(article.content,500)}</p>
              <Link to={`/detailView/${article._id}`}>Read More</Link><br></br><br></br>
              {
        account.username === article.username && <>
     
      <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${article._id}`}>Edit</Button>
      <Button variant="outlined"  color="error" onClick={()=>deleteArticleDetail(article._id)}>Delete</Button>
      </>
    }
              <br></br>
              <br></br>
              </>);
         } 
      })
    }
</Container>
</section>



</div>
    );
}