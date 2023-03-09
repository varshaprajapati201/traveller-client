import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import {register,login} from "../../services/user-api.js";
import { DataContext } from "../../context/DataProvider.jsx";
import { useNavigate } from "react-router-dom";


const Component = styled(Box)`
margin-top:60px;
width:350px;
height:auto;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
width: 200,
margin: "auto",
display: "flex",
padding: "50px 0 0"
});

const Wrapper = styled(Box)`
padding: 20px 30px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > Button, & > p{
    margin-top: 10px;
    margin-Bottom:10px;
    
}
`;

const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height: 0;
    margin-top:10px;
    font-weight:600;

`

const SignUpButton =  styled(Button)`
text-transform: none;
background: #A084CA;
color: #fff;
height: 38px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%) 
`
const defaultSignupValue = {
    name: "",
    username: "",
    password: ""
}
 const defaultLoginValue = {
   username:"",
   password: ""
 }

const Login = ({isUserAuthenticated})=>{
 
    const [account,toggleAccount] = useState('login');
    const [signUp,setSignUp] = useState(defaultSignupValue);
    const [loginDetail,setLogin] = useState(defaultLoginValue);
    const [error,setError] = useState("");
    
    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();



const toggleSignUp = ()=> {
   account === 'signup' ? toggleAccount('login') : toggleAccount('signup')
}


const onInputChange= (e) =>{
setSignUp({
    ...signUp,[e.target.name]: e.target.value
});
}

const onValueChange = (e) =>{
setLogin({
    ...loginDetail,[e.target.name]: e.target.value
})
}


const signUpUser = async () => {
   let response = await register(signUp);
   //console.log(response.status);
   if(response.status===200){
    setError("");
   setSignUp(defaultSignupValue);
   toggleAccount("login");
   }
   else if(response===500){
    setError("Something went wrong! Please try again later.");
   } 
   
}

const loginUser = async ()=>{
let response = await login(loginDetail);
console.log(response.data);
if(response.status===200){
    setError("");

    sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
    sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);    
    
    setAccount({username:response.data.username, name:response.data.name});
    isUserAuthenticated(true);
    navigate("/");
   }
   else if(response===500){
    setError("Something went wrong! Please try again later.");
   } 

}

    return( <div style={{margin:"25px"}}>
   
   <Component>
   <Box>
   <Image src="https://logopond.com/logos/8c35ae11314ea90cd5a6ded5c4af3062.png"></Image>
 {
 account === 'login' ?
 <Wrapper>
    <TextField variant="standard" name="username" value={loginDetail.username} label="Enter username" onChange={(e)=> onValueChange(e)}></TextField>
    <TextField variant="standard" name="password" value={loginDetail.password} label="Enter Password" onChange={(e)=> onValueChange(e)}></TextField>
    
    {error && <Error>{error}</Error>}
    <SignUpButton variant="contained" onClick={()=> loginUser()}>Login</SignUpButton>
    <Typography style={{textAlign: "center"}}>OR</Typography>
    <Button variant="outlined" onClick={()=>toggleSignUp()} >Create an account</Button>
 </Wrapper> 
:
 <Wrapper>
    <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="name" label="Enter Name"></TextField>
    <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="username" label="Enter Username"></TextField>
    <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="password" label="Enter Password"></TextField>

    {error && <Error>{error}</Error>}
    <SignUpButton variant="contained" onClick={()=>signUpUser()}>Signup</SignUpButton>
    <Typography style={{textAlign: "center"}}>OR</Typography>
    <Button variant="outlined" onClick={()=>toggleSignUp()}>Already have an account</Button>
 </Wrapper>
 }
</Box>
       </Component>
       
       </div>
); 
}

export default Login;