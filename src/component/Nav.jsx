import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
    </nav>
  )
}

export default Nav