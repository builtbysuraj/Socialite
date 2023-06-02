import { useEffect } from "react"

import PostCard from "../layouts/post-card/PostCard"
import PostInputCard from "../layouts/post-input-card/PostInputCard"
import "./Post.scss"

export default function Post() {
  useEffect(() => {
    document.title = `Socialite | Home`
  }, [])
  return (
    <main className="post-container">
      <PostInputCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  )
}
