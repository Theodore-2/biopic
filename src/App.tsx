import { Routes, Route, Link } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import DotPage from './pages/DotPage'
import BiopicPage from './pages/BiopicPage'
import AdminPanel from './pages/AdminPage'

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>THEODORE-2</h1>
        <div>
          <Link to="/dot" style={{ marginRight: '10px' }}>
            <button>DoT</button>
          </Link>
          <Link to="/biopic">
            <button>Biopic</button>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/dot" element={<DotPage />} />
        <Route path="/biopic" element={<BiopicPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App