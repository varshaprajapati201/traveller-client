import { Footer } from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { categories } from "../../Constants/data.js";
import Container from "react-bootstrap/esm/Container";
import { BlogsByCategory } from "../Single-Continent-Blog/Single";



export const Category=()=>{
 return (<div className="Blog-By-Category">
<Header />
<div className="categories-tabs">
<Container>
<Tabs
      // defaultActiveKey="All"
      // id="uncontrolled-tab-example"
      // className="mb-3"
    >
   
{
    categories.map(category => (
        
      <Tab key={category.id} eventKey={category.eventKey} title={category.title}>
      <BlogsByCategory cat={category.title} />
      </Tab>
    ))
}

    </Tabs>
    </Container>
</div>


<Footer />
 </div>);
}