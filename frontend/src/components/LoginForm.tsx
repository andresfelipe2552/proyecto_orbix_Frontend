import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Logo from "../assets/images/Logo.png";
import authService from "../services/auth.services";

type LoginFormProps = {
  tipo: "admin" | "opera";
};

const LoginForm = ({ tipo }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setCargando(true);

    try {
      const response = await authService.login(email, password);

      const token = response.data.token;
      const usuario = response.data.usuario;

      // Validar el tipo de acceso
      if (tipo === "admin" && usuario.rol !== "admin") {
        setError(
          "Este usuario no tiene permisos para acceder como administrador."
        );
        return;
      }

      if (
        tipo === "opera" &&
        usuario.rol !== "vendedor" &&
        usuario.rol !== "inventario"
      ) {
        setError(
          "Este usuario no tiene permisos para acceder al área operativa."
        );
        return;
      }

      // Guardar sesión solamente después de validar el rol
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // Redireccionar según el rol
      if (usuario.rol === "admin") {
        navigate("/dashboard/admin");
      }

      if (usuario.rol === "vendedor") {
        navigate("/dashboard/cajero");
      }

      if (usuario.rol === "inventario") {
        navigate("/dashboard/inventario");
      }
    } catch (error) {
      setError("Correo o contraseña incorrectos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="main">
      <div className="login-container">
        <div className="panel-izquierdo">
          <img
            src={Logo}
            alt="Logo de Orbix"
            className="logo-imagen"
          />

          <p>Gestión de inventario y ventas para PYMES.</p>
        </div>

        <div className="panel-derecho">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <h1>Orbix</h1>

              <label htmlFor="correo">
                Correo electrónico
              </label>

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
              <label htmlFor="password">
                Contraseña
              </label>

              <input
                type="password"
                id="password"
                placeholder="Ingresa la contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="button-login"
              disabled={cargando}
            >
              {cargando ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>

            <a href="#" className="forgot-password">
              ¿Olvidaste la contraseña?
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;