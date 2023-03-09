import { useEffect, useState, useContext } from "react";
import { useParams} from "react-router-dom";
import { deleteArticle, getArticleById } from "../../services/article-api.js";
import styled from "@emotion/styled";
import { Footer } from "../../shared/Footer/Footer.jsx";
import Header from "../../shared/Header/Header.jsx";
import { Container } from "@mui/system";
import { DataContext, DataProvider } from "../../context/DataProvider"
import Button from '@mui/material/Button'; 
import { Link } from "react-router-dom";

const Text = styled('h6')`
color: #878787;
font-size: 12px;

`

export const DetailView = () => {

const [article, setArticle] = useState({});
const {id} = useParams();
const {account} = useContext(DataContext);

const deleteArticleDetail = async (id)=>{
    await deleteArticle(id);
    
  }

useEffect(() => {
     const fetchData = async () =>{
    let response = await getArticleById(id);
    if(response.status === 200){
        setArticle(response.data);
    }
     }
     fetchData();
},[])

  return (<>
  <Header />
  <section id="blog-detail-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="section-title ">{article.title}</h2>
    </section>
    <Container>
    <Text>By {article.username} on {new Date(article.createdDate).toDateString()}</Text>
      <h3>{article.category}</h3>
      <p>{article.content}</p>

      {
        account.username === article.username && 
        <>
        <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${article._id}`}>Edit</Button>
      <Button variant="outlined"  color="error" onClick={()=>deleteArticleDetail(article._id)}>Delete</Button>
        </>
      }
      </Container>
    </section>
    <Footer />
  </>);
}