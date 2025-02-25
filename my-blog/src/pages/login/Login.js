import React,{useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import { useDispatch } from 'react-redux';
import { handleUserLogin } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const[eyeToggle, setEyeToggle] = useState(false);
  const[userSignUpData, setUserSignUpData] = useState([]);
  const[isUserLogin, setIsUserLogin] = useState(false);
  const[signIn, setSignIn] = useState({
    userName:'',
    password:''
  });

  useEffect(()=>{
    const savedData = localStorage.getItem("userSignUpData");
    setUserSignUpData(JSON.parse(savedData));
  },[]);


  function handleSignInChange(e) {
    setSignIn({...signIn, [e.target.name] : e.target.value})
  }

  useEffect(()=> {
    console.log(signIn);
  },[signIn]);

  
  function handleSignInForm(event) {
    event.preventDefault();
    if(userSignUpData[0].userName == signIn.userName && userSignUpData[0].password == signIn.password) {
      toast.success(
        <div>
            <h5 style={{fontWeight:'bolder'}}>Logged In! Sucessfully</h5>
        </div>
      );
      setIsUserLogin(true);
      setTimeout(()=> {
        navigate('/')
      },1600)
    }
    else{
      toast.error(
        <div>
            <h5 style={{fontWeight:'bolder'}}>Invalid Info!</h5>
        </div>
      );
    }
  }

  useEffect(()=> {
    console.log(isUserLogin);
    dispatch(handleUserLogin(isUserLogin));
  },[isUserLogin]);


 
  return (
    <div class="main-container">
        <div class="form-container">
            <h2 className='mb-4'>User Login</h2>
            <form id="login-form" onSubmit={handleSignInForm}>
                <input 
                  type="text" 
                  placeholder="Username" 
                  aria-label="Username"
                  name='userName'
                  onChange={handleSignInChange}
                  value={signIn.userName}
                  required 
                />
                  <div className='w-100 password-field'>
                    <input 
                        type={`${!eyeToggle ? 'password' : 'text'}`}
                        placeholder="Password" 
                        name='password' 
                        className='w-100'
                        onChange={handleSignInChange} 
                        value={signIn.password} 
                        required 
                    />
                    <a href='#' onClick={(e)=> {
                        e.preventDefault();
                        setEyeToggle(!eyeToggle);
                    }}> 
                      { eyeToggle? <IoEyeOutline /> : <IoEyeOffOutline /> }
                    </a>
                </div>

                <Link to='/sign-up' style={{textDecoration:"none"}}>Don't have account? Create Now!</Link>
                <button type="submit" class="btn-1">
                  <span>Login</span>
                </button>

                <div className="content-bottom">
                  <p>Continue with using</p>
                  <div className="social-login">
                    <button id="googleSignInBtn">
                      <img src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" />
                    </button>
                    <button id="facebookSignInBtn">
                      <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" />
                    </button>
                    <button id="twitterSignInBtn">
                      <img src="https://cdn.worldvectorlogo.com/logos/x-2.svg" />
                    </button>
                  </div>
                </div>

            </form>
        </div>
        <ToastContainer />
   </div>

  )
}

export default Login;