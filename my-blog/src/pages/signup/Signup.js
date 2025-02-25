import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Signup = () => {
    const[Data, setData] = useState([]);
  
    useEffect(()=> {
      const savedData = localStorage.getItem("userSignUpData");
      if(savedData){
        setData([...Data, JSON.parse(savedData)]);
      }
    },[]);

    const navigate = useNavigate();
    const[eyeToggle, setEyeToggle] = useState(false);
    const[isPasswordError, setIsPasswordError] = useState('');
    const[signupData, setSignupData] = useState([]);
    const[signup, setSignup] = useState({
        userName:'',
        email:'',
        password:'' 
    })

    function handleInputChange(e) {
        const{ name, value } = e.target;
        setSignup({...signup, [name] : value})
    }

    useEffect(()=> {
        console.log(signup);
    },[signup])

    function handleSignUpFormSubmit(event) {
        event.preventDefault();
        const res = signup.password.split('').map((letter) => letter >= 0);

        if(res.includes(true)) {
            console.log("number exists");
            setIsPasswordError('');
            toast.success(
                <div>
                    <h5 style={{fontWeight:'bolder'}}>
                      {`Congratulations!! ${signup.userName}`}
                    </h5>
                    <p>Your Profile has been registered</p>
                </div>
            )
            const sign_up_data = [...signupData, signup];
            setSignupData(sign_up_data);
            localStorage.setItem("userSignUpData", JSON.stringify(sign_up_data));
            setSignup({
                userName:'',
                email:'',
                password:'' 
            });

            setTimeout(()=> {
                navigate('/sign-in');
            },1600);
        }
        
        else { 
            setIsPasswordError('Password must requires at least a number') 
        }
    }

    useEffect(()=> {
       console.log(signupData);
    },[signupData])

    
  return (
    <div className='main-container'>
        <div class="form-container">
            <h2 className='mb-4'>Register Now!</h2>
            <form id="signup-form" onSubmit={handleSignUpFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name='userName' 
                    onChange={handleInputChange} 
                    value={signup.userName} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name='email' 
                    onChange={handleInputChange} 
                    value={signup.email} required 
                />
                <div className='w-100 password-field'>
                    <input 
                        type={`${!eyeToggle ? 'password' : 'text'}`}
                        placeholder="Password" 
                        name='password' 
                        className='w-100'
                        onChange={handleInputChange} 
                        value={signup.password} 
                        required 
                    />
                    <a href='#' onClick={(e)=> {
                        e.preventDefault();
                        setEyeToggle(!eyeToggle);
                    }}> 
                        { eyeToggle? <IoEyeOutline /> : <IoEyeOffOutline /> }
                    </a>
                </div>
                
                <span style={{
                    color: 'red', 
                    fontSize: '12px', 
                    lineHeight:'1'
                }}>
                    {isPasswordError}
                </span>

                <button type="submit" class="btn-1">
                  <span>Sign Up</span>
                </button>
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Signup;