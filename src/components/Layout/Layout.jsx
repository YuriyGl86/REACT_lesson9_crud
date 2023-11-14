import { Outlet } from "react-router-dom"
import { Menu } from "../Menu"

export  function Layout() {
  return (
    <div className="container">
        <header>
          <Menu/>
        </header>
        <main className="page">
          <Outlet/>
        </main>
    </div>
  )
}
