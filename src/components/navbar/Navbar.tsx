import {
  Search,
  Person,
  Notifications,
  Comment,
  AccountCircle,
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

import "./Navbar.scss"

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="navbar-container">
      <section className="navbar-wrapper">
        <div className="left">
          <div className="heading">Socialite</div>
        </div>
        <div className="center">
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="right">
          <section className="user-icons">
            <div className="icon-item">
              <Person className="icon" />
              <span>3</span>
            </div>
            <div className="icon-item">
              <Notifications className="icon" />
              <span>7</span>
            </div>
            <div className="icon-item">
              <Comment className="icon" />
              <span>13</span>
            </div>
          </section>
          <section className="profile">
            <AccountCircle className="icon" />
          </section>
        </div>
      </section>
    </header>
  )
}
