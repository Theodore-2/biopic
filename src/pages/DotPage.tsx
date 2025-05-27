import { useEffect, useState } from 'react'

const DotPage = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3001/posts')
      const data = await res.json()
      const filtered = data.filter((p: any) => p.category === 'dot')
      setPosts(filtered.reverse())
    }

    fetchPosts()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Developer Log (DoT)</h2>
      {posts.length === 0 ? (
        <p>Henüz içerik yok.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  )
}

export default DotPage