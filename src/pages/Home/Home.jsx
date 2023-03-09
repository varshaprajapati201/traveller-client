import Header from "../../shared/Header/Header";
import { Footer } from "../../shared/Footer/Footer";
import { Hero } from "../Home/components/Hero/Hero";
import { Intro } from "../Home/components/Intro/Intro";
import { BlogSection } from "./components/Blogs/Blogs";

export const Home=()=>{
    return (
        <>
            <Header fixed="top"/>
  <div><Hero /></div>
  <div><Intro /></div>
  <BlogSection />  
<div><Footer /></div>
        </>
    );
}