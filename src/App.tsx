import { Routes, Route, Link, useLocation } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import DotPage from './pages/DotPage'
import BiopicPage from './pages/BiopicPage'
import AdminPage from './pages/AdminPage'

function App() {
  const location = useLocation()

  const handleAuth = () => {
    const password = prompt('Şifreyi giriniz:')
    if (password === 'theo123') {
      localStorage.setItem('authenticated', 'true')
      window.location.href = '/admin' // Yönlendirme garanti çalışır
    } else {
      alert('Hatalı şifre!')
    }
  }

  const isOnAdminPage = location.pathname === '/admin'

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>THEODORE-2</h1>

      {!isOnAdminPage && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          margin: '20px 0',
        }}>
          <Link to="/"><button style={buttonStyle}>Anasayfa</button></Link>
          <Link to="/dot"><button style={buttonStyle}>DoT</button></Link>
          <Link to="/biopic"><button style={buttonStyle}>Biopic</button></Link>
          <button style={buttonStyle} onClick={handleAuth}>For Theodore-2</button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/dot" element={<DotPage />} />
        <Route path="/biopic" element={<BiopicPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

const buttonStyle: React.CSSProperties = {
  padding: '6px 14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: '#f8f8f8',
  cursor: 'pointer',
}

export default App