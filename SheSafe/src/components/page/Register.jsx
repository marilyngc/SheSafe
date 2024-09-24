import { IoLogoGoogleplus } from "react-icons/io";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import logo from "../../assets/logo.png";
export const Register = () => {
  return (
    <>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
           
            <h1>Registro</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-google-plus-g">
                  <IoLogoGoogleplus />
                </i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g">
                  <PiMicrosoftOutlookLogoFill />
                </i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g">
                  <FiInstagram />
                </i>
              </a>
            </div>
           
            <input type="name" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="DNI" />
            <input type="number" placeholder="Celular" />
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Repetir contraseña" />
   
            <button className="register_button">Registrarme</button>
          </form>
        </div>
      </div>
    </>
  );
};
