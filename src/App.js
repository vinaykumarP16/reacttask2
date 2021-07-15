import React,{ useState } from 'react';
import './App.css';

const Form = (props) => {

  const[email,setEmail]=useState('');
  const[desc,setDesc]=useState('');
  const[password,setPassword]=useState('');
  const[emailerror,setEmailerror]=useState('');
  const[passerr,setPasserr]=useState('');
  const[descerr,setDescerr]=useState('');

 
  const validata=(e)=>{
    setEmail(e.target.value);
    if( email.includes('@')  &&  email.includes('.') ){
        setEmailerror('');
   
    }else{
      setEmailerror('Please enter valid email address');
    }
  }

  const checkpass=(e)=>{
        setPassword(e.target.value);
      if(password.length<6){
        setPasserr('minimum 8 character')
      }else{
        setPasserr('')
      } 
  }

   const enterdesc=(e)=>{
        setDesc(e.target.value);
      if(desc.length<4){
        setDescerr('enter valid Data')
      }else{
        setDescerr('')
        console.log('good desc')
      } 
  }


  const handleClick=(e)=>{
    if(password.length>8 && email.includes('@')){
      alert('submittted');
      console.log(password);
      console.log(email); 
      console.log(desc) 
    }else{
      alert('something wrong with the entered data please check it')
    }

    

  }  


  return (
    <div className="formmain">
        <div className="form">
        <h1>Sign Up</h1>
        <h5>No credit card required</h5>
         <input type="text" placeholder="Email address"  value={email} onChange={validata}/>
        <p className="err">{emailerror}</p>
        <input type="text" placeholder="Company name"  value={desc} onChange={enterdesc}/>
        <p className="err">{descerr}</p>
        <input type="password" placeholder="password"  value={password} onChange={checkpass}/>
        <p className="err">{passerr}</p>
        <div className="check">
          <input type="checkbox"/>
          <h5>I agree to the Terms & Conditions </h5>  
        </div>
        
        <button onClick={handleClick}>SUBMIT</button>
        </div>
    </div>
  )
}

export default Form


;
