import Col from "react-bootstrap/esm/Col";

import Row from "react-bootstrap/esm/Row";
import { NavLink } from "react-router-dom";


export const BlogSection=()=>{
    return (
    <section id="blog-section" class="container w-container">
    <section class="section-title-wrapper">
    <h2 class="section-title ">Discover my stories</h2>
    </section>
<div class="featured-categories-wrapper">

<Row>
<Col sm={5}><img class="blog-img" src="https://images.hdqwalls.com/download/travel-hd-2560x1440.jpg" alt="Blog.img"></img></Col>
<Col className="discover-paragraph" sm={7}><h4>If you’re like us, there’s a yearning inside of you to TRAVEL.</h4>
<div class="text-column-right w-col w-col-6">
<p class="paragraph" >You’re possibly tired of life stuck in the hamster wheel, and want to reclaim a little bit of freedom, ease, and joy.

A chance to just slip into a hammock undisturbed at sunset with an ice cold drink and a slow sway to the tunes of your favorite song.

The opportunity to tell enriching stories and have something to laugh about for years to come.

Maybe it’s something more you want to escape to – a road trip in the USA, or across Australia, a trek to Machu Picchu, teaching English in Asia, or a gap year that turns into three – like mine did.</p>
<br></br>

<NavLink className={"blog-archive-anchor"} to="/all">Blog Archive</NavLink>

</div>
</Col>


</Row>
 
</div>
    </section>
        
    );
}