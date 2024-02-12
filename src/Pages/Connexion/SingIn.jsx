import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../features/LoginSlice";
import {useNavigate} from "react-router-dom";

function Login () {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// remember me
	const [rememberMe, setRememberMe] = useState(false);
	
	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		const storedPassword = localStorage.getItem("password");
		
		if(storedEmail && storedPassword) {
			setEmail(storedEmail);
			setPassword(storedPassword);
			setRememberMe(true);
		}
	}, []);
	
	useEffect(() => {
		if(rememberMe) {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
		} else {
			localStorage.removeItem("email");
			localStorage.removeItem("password");
		}
	}, [rememberMe, email, password]);
	//end remember me
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const {loading, error} = useSelector((state) => state.user);
	// const token = useSelector((state) => state.user.token);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		let userCredentials = {
			email,
			password,
		};
		
		dispatch(loginUser(userCredentials)).then((result) => {
			if(result.payload) {
				setEmail("");
				setPassword("");
				navigate("/user");
			}
		});
	};
	
	return (
			<main className='main bg-dark  '>
				<section className={`sign-in-content ${error ? "error " : "null"}`}>
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input
									type="text"
									id="username"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-remember">
							<input
									type="checkbox"
									id="remember-me"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
							/>
							<label htmlFor="remember-me">Remember me</label>
						</div>
						
						<button className="sign-in-button">
							{loading ? "Loading ..." : " Sign In"}
						</button>
						{error ? <p className="text-danger">{error}</p> : null}
					</form>
				</section>
			</main>
	);
}

export default Login;
