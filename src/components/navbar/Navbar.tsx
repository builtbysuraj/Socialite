import {
  Home,
  Search,
  Person,
  Notifications,
  Comment,
} from "@mui/icons-material"

import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <section className="navbar-wrapper">
        <div className="left">
          <div className="icon">
            <Home />
          </div>
          <div className="heading">Socialite</div>
        </div>
        <div className="center">
          <Search />
          <input type="text" placeholder="Search for friends, post or video" />
        </div>
        <div className="right">
          <section className="links">
            <a href="#">Homepage</a>
            <a href="#">Timeline</a>
          </section>
          <div className="user-icons">
            <div className="person">
              <Person />
            </div>
            <div className="notify">
              <Notifications />
            </div>
            <div className="msg">
              <Comment />
            </div>
          </div>
          <div className="profile"></div>
        </div>
      </section>
    </nav>
  )
}
