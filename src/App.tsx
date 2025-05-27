import { Routes, Route, Link } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import DotPage from './pages/DotPage'
import BiopicPage from './pages/BiopicPage'
import AdminPanel from './pages/AdminPage'
import { useState } from 'react'

function App() {
  const [auth, setAuth] = useState(false)

  const handleAuth = () => {
    const password = prompt('Şifreyi giriniz:')
    if (password === 'theo123') {
      setAuth(true)
    } else {
      alert('Hatalı şifre!')
    }
  }

  return (
    <div>
      {/* Başlık */}
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>THEODORE-2</h1>

      {/* Navigasyon Butonları */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          margin: '20px 0',
        }}
      >
        <Link to="/">
          <button style={buttonStyle}>Anasayfa</button>
        </Link>
        <Link to="/dot">
          <button style={buttonStyle}>DoT</button>
        </Link>
        <Link to="/biopic">
          <button style={buttonStyle}>Biopic</button>
        </Link>

        {/* Şifre girildiyse doğrudan admin sayfasına giden buton */}
        {auth ? (
          <Link to="/admin">
            <button style={buttonStyle}>For Theodore-2</button>
          </Link>
        ) : (
          <button style={buttonStyle} onClick={handleAuth}>
            For Theodore-2
          </button>
        )}
      </div>

      {/* Rotalar */}
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/dot" element={<DotPage />} />
        <Route path="/biopic" element={<BiopicPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

// Ortak buton stili
const buttonStyle: React.CSSProperties = {
  padding: '6px 14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: '#f8f8f8',
  cursor: 'pointer',
}

export default App