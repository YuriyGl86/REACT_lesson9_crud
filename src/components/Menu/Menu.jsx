import { NavLink } from "react-router-dom"

export  function Menu() {
    // const activeLink = ({isActive}) => {
    //     return isActive? "menu__item menu__item-active": "menu__item"
    // }

  return (
    <nav className="menu">
        <NavLink className='new-post-button' to="/">Home</NavLink>
        <NavLink className='new-post-button' to="/posts/new">Создать пост</NavLink>
    </nav>
  )
}
