import Container from "react-bootstrap/esm/Container";
import Header from "../../shared/Header/Header";
import { Footer } from "../../shared/Footer/Footer";
import { getArticle,deleteArticle} from "../../services/article-api.js";
import { useEffect,useState, useContext } from "react";
import Button from '@mui/material/Button'; 
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {addElipsis} from "../../utils/common-utils.js"
import { DataContext, DataProvider } from "../../context/DataProvider"

const Text = styled('h6')`
color: #878787;
font-size: 12px;

`

export const BlogArchive=()=>{


const [articles,setArticles]= useState([]);
const {account} = useContext(DataContext);

useEffect(()=>{
  getAllArticle();
},[]);

const getAllArticle = async () => {
  let response = await getArticle();
  // console.log(response.data);
  setArticles(response.data);
}

const deleteArticleDetail = async (id)=>{
  await deleteArticle(id);
  getAllArticle();
}

    return (
        <>

<Header fixed="top" />

<section id="blog-archive-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="section-title ">Blog Archive</h2>
    </section>


    { articles.map(article=>(<Container>
      <Text>By {article.username} on {new Date(article.createdDate).toDateString()}</Text>
      <h2>{article.title}</h2>
      <h5>{article.category}</h5>
      <p>{addElipsis(article.content,500)}</p>
      <Link to={`/detailView/${article._id}`}>Read More</Link><br></br>
      {
        account.username === article.username && <>
     <br></br>
      <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${article._id}`}>Edit</Button>
      <Button variant="outlined"  color="error" onClick={()=>deleteArticleDetail(article._id)}>Delete</Button>
      <br></br> </> 
    }
      
      <br></br><br></br>
      </Container>
    ))
    }

</section>




<Footer />
  </>    
    )
}