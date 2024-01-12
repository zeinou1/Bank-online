import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginUser } from "../../features/LoginSlice";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //dispatch
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {loading,error} = useSelector((state) => state.user)
  const token  = useSelector((state)=> state.user.token)
 // console.log(token);
  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {      
        setEmail('');
        setPassword('');
        navigate('/user');
      }
    });

  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" 
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">
            {
              loading ? 'Loading ...' : ' Sign In'
            }
            
           </button>
           {
              error ? <p className="text-danger">{error}</p> : null
            }
        </form>
      </section>
    </main>
  );
}

export default Login;
