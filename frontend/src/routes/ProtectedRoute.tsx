import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  roles: string[];
};

const ProtectedRoute = ({
  children,
  roles,
}: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const usuarioGuardado = localStorage.getItem("usuario");

  // No existe una sesión
  if (!token || !usuarioGuardado) {
    return <Navigate to="/login/admin" replace />;
  }

  const usuario = JSON.parse(usuarioGuardado);

  // El usuario está autenticado,
  // pero su rol no tiene permiso para esta ruta
  if (!roles.includes(usuario.rol)) {
    return <Navigate to="/login/admin" replace />;
  }

  // Tiene sesión y el rol correspondiente
  return children;
};

export default ProtectedRoute;