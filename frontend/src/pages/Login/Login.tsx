import LoginForm from "../../components/LoginForm";
import "./Login.css";
import Logo from "../../assets/images/Logo.png";
const Login = () => {
  return (
    <main className="main">
      <div className="login-container">
        <div className="panel-izquierdo">
          <img src={Logo} alt="Logo de Orbix" className="logo-imagen"/>
          <p>Gestión de inventario y ventas para PYMES.</p>
        </div>
        <div className="panel-derecho">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
