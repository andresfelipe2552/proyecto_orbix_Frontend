import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <h1 className="titulo">Orbix</h1>
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          placeholder="correo@empresa.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingresa la contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="button-login">Iniciar sesión</button>
      <a href="#" className="forgot-password" >¿Olvidaste la contraseña?</a>
    </form>
  );
};

export default LoginForm;
