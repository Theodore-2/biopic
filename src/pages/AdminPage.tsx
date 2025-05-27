import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const [authorized, setAuthorized] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('dot') // varsayılan olarak dot
  const navigate = useNavigate()

  const handleClick = () => {
    const password = prompt('Şifre girin:')
    if (password === 'theo123') {
      setAuthorized(true)
    } else {
      alert('Hatalı şifre')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newPost = {
      title,
      content,
      category,
      date: new Date().toISOString(),
    }

    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      })

      if (response.ok) {
        alert('İçerik başarıyla eklendi!')
        navigate('/') // ✅ ana sayfaya yönlendir
      } else {
        alert('Kaydetme hatası')
      }
    } catch (error) {
      console.error('Hata:', error)
      alert('Bağlantı hatası')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      {!authorized ? (
        <button onClick={handleClick}>For Theodore-2</button>
      ) : (
        <div>
          <h2>İçerik Ekle</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Başlık"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <textarea
              placeholder="İçerik"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <br />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="dot">DoT</option>
              <option value="biopic">Biopic</option>
            </select>
            <br />
            <button type="submit">Kaydet</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AdminPanel