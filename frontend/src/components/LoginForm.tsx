import { useState } from "react";
import "./LoginForm.css";
import authService from "../services/auth.services";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await authService.login(email, password);

      console.log("Login exitoso:", response);

      const token = response.data.token;

      localStorage.setItem("token", token);

      console.log("Token guardado");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <h1>Orbix</h1>

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

      <button type="submit" className="button-login">
        Iniciar sesión
      </button>

      <a href="#" className="forgot-password">
        ¿Olvidaste la contraseña?
      </a>
    </form>
  );
};

export default LoginForm;
