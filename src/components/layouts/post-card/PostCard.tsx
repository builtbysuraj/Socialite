import {
  AccountCircle,
  Favorite,
  MoreHoriz,
  ThumbUpAlt,
} from "@mui/icons-material"

import "./PostCard.scss"

export default function PostCard() {
  return (
    <section className="post-card-container">
      <section className="post-card-wrapper">
        <div className="top">
          <div className="top-left">
            <AccountCircle className="icon" />
            <span className="post-username">Jhon Doe</span>
            <span className="posted-time">5 mins ago</span>
          </div>
          <div className="top-right">
            <MoreHoriz className="morehoriz-icon" />
          </div>
        </div>
        <div className="mid">
          <div className="post-card-description">This is a long Post description</div>
          <img src="https://picsum.photos/600" alt="" />
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <ThumbUpAlt className="icon" />
            <Favorite className="icon" />
            <span>24 people liked it</span>
          </div>
          <span className="bottom-right">8 comments</span>
        </div>
      </section>
    </section>
  )
}
