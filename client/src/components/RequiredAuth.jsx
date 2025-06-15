import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children, role }) {
  const token = localStorage.getItem(`${role}-token`);

  if (!token) {
    return <Navigate to={`/${role}/login`} replace />;
  }

  return children;
}