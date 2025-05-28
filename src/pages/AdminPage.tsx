import { useState } from 'react'

const AdminPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('dot')

  const isAuthenticated = localStorage.getItem('authenticated') === 'true'
  if (!isAuthenticated) {
    window.location.href = '/' // sayfa yenilense bile koruma devam eder
    return null
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
        window.location.href = '/'
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
      <h2>Yönetim Paneli</h2>
      <form onSubmit={handleSubmit}>
        <label>Kategori:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="dot">DoT</option>
          <option value="biopic">Biopic</option>
        </select>
        <br /><br />
        <label>Başlık:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />
        <label>İçerik:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          cols={40}
        />
        <br /><br />
        <button type="submit">Paylaş</button>
      </form>
    </div>
  )
}

export default AdminPage