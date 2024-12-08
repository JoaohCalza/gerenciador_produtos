import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavbarTop from './components/NavbarTop';
import { Container } from 'react-bootstrap';
import NavbarBottom from './components/NavbarBottom';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Login from './login';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLoginPage = router.pathname === '/login';

  const handleLogin = () => {
    setIsAuthenticated(true);
    router.push('/'); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.push('/login'); 
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoginPage, router]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}> 
      {!isLoginPage && (
        <NavbarTop isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      )}
      <main className="flex-grow-1">
        {isLoginPage ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Container>
            <Component {...pageProps} />
          </Container>
        )}
      </main>
      {!isLoginPage && <NavbarBottom />}
    </div>
  );
}
