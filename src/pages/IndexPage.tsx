import { useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  content: string
  date: string
}

const IndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3001/posts')
      const data = await res.json()
      const sorted = data.sort(
        (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      setPosts(sorted)
    }

    fetchPosts()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Son İçerikler</h2>
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

export default IndexPage