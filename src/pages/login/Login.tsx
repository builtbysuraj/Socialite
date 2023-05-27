import { useNavigate } from "react-router-dom"
import "./Login.scss"

export default function Login() {
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate("/home")
  }

  return (
    <main className="container">
      <section className="left">
        <div className="heading">Socialite</div>
        <div className="description">
          Socialite helps you connect and share with the people in your life.
        </div>
      </section>
      <section className="right">
        <form>
          <input
            type="text"
            spellCheck="false"
            autoComplete="false"
            placeholder="Email address or phone number"
            autoFocus
          />
          <input type="password" placeholder="Password" />
          <button onClick={(e) => handleSubmit(e)} type="submit">
            Log in
          </button>
        </form>
        <p className="forgotten">
          <a href="#"> Forgotten password?</a>
        </p>
        <section className="h-bar">
          <hr />
        </section>
        <div className="new-acc">
          <button className="new-acc">Create new account</button>
        </div>
        <div className="info">
          <a href="#">Create a Page</a> for a celebrity, brand or business.
        </div>
      </section>
    </main>
  )
}
