import {
  AccountCircle,
  MoreHoriz,
  ThumbUpAlt,
} from "@mui/icons-material"

import "./PostCard.scss"

export default function PostCard() {
  return (
    <section className="post-card-container">
      <section className="post-card-wrapper">
        <div className="top">
          <AccountCircle className="icon" />
          <span>Jhon Doe</span>
          <span>5 mins ago</span>
          <MoreHoriz />
        </div>
        <div className="mid">
          <div>Love for all hate for none</div>
          <img src="" alt="" />
        </div>
        <div className="bottom">
          <ThumbUpAlt className="icon" />
          <span>24 people liked it</span>
          <span>8 comments</span>
        </div>
      </section>
    </section>
  )
}
