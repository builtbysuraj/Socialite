import {
  AccountCircle,
  EmojiEmotions,
  PermMedia,
  PersonAddAlt1,
} from "@mui/icons-material"
import "./PostInputCard.scss"

export default function PostInputCard() {
  return (
    <div className="input-card">
      <section className="input-section">
        <AccountCircle className="input-avatar-icon" />
        <input type="text" placeholder="What's on your mind?" />
      </section>
      <div className="hr">
        <hr />
      </div>
      <section className="options">
        <section className="options-item">
          <PermMedia className="media-icon icon" />
          <section className="option-name">Photo/Video</section>
        </section>
        <section className="options-item">
          <PersonAddAlt1 className="tag-person-icon icon" />
          <section className="option-name">Tag Friends</section>
        </section>
        <section className="options-item">
          <EmojiEmotions className="feeling-icon icon" />
          <section className="option-name">Feeling/Activity</section>
        </section>
      </section>
    </div>
  )
}
