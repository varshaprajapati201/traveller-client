import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collage } from './Collage';

export const Details=()=>{
    return ( <div class="container w-container">
        
            <Container>

            <Row>
        <Col sm={5}><h2 class="column-title">In the summer of 2017 <br></br>I started my travel around the world. In my blog you can follow me.</h2>
        <div class="text-column-right w-col w-col-6">
        <p class="paragraph">Lorem ipsum dolor sit amet, nt of a page when loo
        king at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
         opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsu
        consectetur adipiscing elit. Suspendisse varius enim in eros elementum
         tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus 
          tristique posuere.</p>
        </div></Col>
        <Col sm={7}><Collage /></Col>
      </Row>
      
    </Container>
</div>
    );
}