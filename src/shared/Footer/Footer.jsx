import { BsGithub,BsInstagram,BsLinkedin } from "react-icons/bs";

export const Footer=()=>{
    return (
        <div class="footer-section">
            <footer id="footer">
            <div class="social-links mt-3 text-center">
          <a href="https://github.com/varshaprajapati201" class="GitHub"><BsGithub /></a>
          <a href="https://www.instagram.com/varsha_p123/" class="instagram"><BsInstagram /></a>
          <a href="https://www.linkedin.com/in/varshaprajapati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Boj%2B9kp97S7u%2F11sq4RHFcg%3D%3D" class="linkedin"><BsLinkedin /></a>
          
        </div>
   </footer>
        </div>
    );

}