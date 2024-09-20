import { IoLogoGoogleplus } from "react-icons/io";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import logo from "../../assets/logo.png";
export const Login = () => {
    return(
        <>



<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
			<img src={logo} alt="" />
			{/* <h1>Sign in</h1> */}
			<div class="social-container">
				
				<a href="#" class="social"><i class="fab fa-google-plus-g"><IoLogoGoogleplus /></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"><PiMicrosoftOutlookLogoFill /></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"><FiInstagram /></i></a>
				
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>

	
</div>
 </>
    )
}