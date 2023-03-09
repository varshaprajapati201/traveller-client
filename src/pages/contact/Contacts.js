import Header from "../../shared/Header/Header";
import { Footer } from "../../shared/Footer/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { BsFillEnvelopeFill,BsGeoAltFill } from "react-icons/bs";
import Iframe from 'react-iframe'
import LocationMap from "../../assets/map.png"


export const Contact=()=>{
    return (<div>
<Header fixed="top" />
<div class="container w-container">
<Container className="contact-container">
    <Row>
        <Col sm={5}><h2 class="column-title">Got a question or proposal, or just want
            to say hello? Go ahead and click on the email link.</h2>
        <div class="text-column-right w-col w-col-6">
        <div class="info">
              <div class="address">
              <i class="bi bi-envelope-fill"></i><br></br>
                <h4><BsGeoAltFill />Location:</h4>
                <p>New Delhi, India</p>
              </div>

              <div class="email">
              
                <h4><BsFillEnvelopeFill /> Email:</h4>
                <p><a href="mailto:varshaprajapati.15004@gmail.com">varshaprajapati.15004@gmail.com</a></p>
              </div>

              {/* <Iframe src="assets/img/show-google-map.png"
                frameborder="0" style="border:0; width: 100%; height: 290px;" ></Iframe> */}
                <div class="col-lg-7 ">
          <Iframe src={LocationMap}
        width="450px"
        height="290px"
        
        position=""/></div>

              
            </div>
        </div></Col>
        <Col sm={7}>
        <section className="collage-section">
<div class="image-overlap-1">
  <img class="image-overlap--large collage-img" alt="map" src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_6080.png"></img>

</div>
</section>
        </Col>
      </Row>
      
    </Container>
    </div>
<Footer />

    </div>
 );
}