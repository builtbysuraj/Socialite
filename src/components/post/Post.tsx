import { useEffect } from "react"

import PostInputCard from "../layouts/PostInputCard"
import PostCard from "../post-card/PostCard"
import "./Post.scss"

export default function Post() {
  useEffect(() => {
    document.title = `Socialite | Home`
  }, [])
  return (
    <main className="post-container">
      <PostInputCard />
      {/* <div className="posts-wrapper"></div>  */}
      <PostCard />
    </main>
  )
}
