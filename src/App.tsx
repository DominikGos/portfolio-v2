import { Route, Routes } from "react-router-dom"
import { AppRoute, routes } from "./routes"

function App() {
  return <Routes>
      <Route
        path={routes.home.path}
        element={routes.home.element}
      />
  </Routes>
}

export default App
