import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
const Navigation = () => {
return (
<>
<Navbar bg="danger" variant="dark" className="navbar">
<Container className="justify-content-around">
<Nav>
<Link to="/" className="text-white ms-3 text-decoration-none">
🏠Home
</Link>
<Link to="/contact" className="text-white ms-3 text-decoration-none">
📒Contacto
</Link>
</Nav>

<Nav>
<Navbar.Brand href="/">Happy Cake 🍰</Navbar.Brand>
</Nav>
</Container>
</Navbar>

</>
);
}

export default Navigation