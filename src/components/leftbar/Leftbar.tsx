import {
  OndemandVideo,
  EventAvailable,
  PeopleRounded,
  RestoreRounded,
  AccountCircle,
  MoreHorizRounded,
} from "@mui/icons-material"

import "./Leftbar.scss"

export default function Leftbar() {
  return (
    <aside className="leftbar-container">
      <section className="icon-wrapper">
        <AccountCircle className="icon" />
        <span>Person</span>
      </section>
      <section className="icon-wrapper">
        <OndemandVideo className="icon" />
        <span>Watch</span>
      </section>
      <section className="icon-wrapper">
        <EventAvailable className="icon" />
        <span>Event</span>
      </section>
      <section className="icon-wrapper">
        <PeopleRounded className="icon" />
        <span>People</span>
      </section>
      <section className="icon-wrapper">
        <RestoreRounded className="icon" />
        <span>Memories</span>
      </section>
      <div className="see-more">See More</div>
      <div className="hr">
        <hr />
      </div>
      {/* Bottom section */}
      <section className="shortcuts">
        <div className="shortcut-wrapper">
          <section className="shortcut-name">Shortcuts</section>
          <MoreHorizRounded className="three-dots" />
        </div>
        <div className="shortcut-items-wrapper">
          <section className="shortcut-item">
            <img src="https://picsum.photos/100" alt="" />
            <span>Undiscovered Eats</span>
          </section>
          <section className="shortcut-item">
            <img src="https://picsum.photos/100" alt="" />
            <span>Weekend Trips</span>
          </section>
          <section className="shortcut-item">
            <img src="https://picsum.photos/100" alt="" />
            <span>Jasper's Market</span>
          </section>
          <section className="shortcut-item">
            <img src="https://picsum.photos/100" alt="" />
            <span>Red Table Talk Group</span>
          </section>
          <section className="shortcut-item">
            <img src="https://picsum.photos/100" alt="" />
            <span>Best Hidden Hiking Trails</span>
          </section>
        </div>
        <div className="see-more">See More</div>
      </section>
    </aside>
  )
}
