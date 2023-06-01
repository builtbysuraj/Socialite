import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles/global.scss"

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
  </>
)
