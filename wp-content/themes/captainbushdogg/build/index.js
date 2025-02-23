import ReactApp from "./app"
import React from "react"
import ReactDOM from "react-dom/client"

if (document.querySelector("#react-app")) {
  const root = ReactDOM.createRoot(document.querySelector("#react-app"))
  root.render(<ReactApp />)
}

