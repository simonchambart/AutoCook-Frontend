import * as React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"
// import { initMocks } from "./test/server"

// initMocks()

const rootElement = document.getElementById("root")
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root"),
    )
}