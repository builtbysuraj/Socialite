import "./Home.scss"
import Leftbar from "../../components/leftbar/Leftbar"
import Navbar from "../../components/navbar/Navbar"
import Post from "../../components/post/Post"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-wrapper">
        <Leftbar />
        <Post />
        <Rightbar />
      </div>
    </div>
  )
}
