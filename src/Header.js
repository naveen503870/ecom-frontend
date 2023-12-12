
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    // const navigate = useNavigate;
    // function logOut(){
    //     localStorage.clear();
    //     useNavigate.push("/add");
    // }
    return (
    <div>
    <Navbar >
        <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
        <Nav className="mar-auto nav_bar_wrapper">
        {
            localStorage.getItem("user-info") ? 
            <>
            <Nav.Link href="add" >Add products</Nav.Link>
            <Nav.Link href="update" >Update</Nav.Link>
            <Nav.Link href="products" >ProductsList</Nav.Link>
            </> : 
            <>
            <Nav.Link href="/" >Register</Nav.Link>
            <Nav.Link href="login" >Login</Nav.Link>
            </>
        }
        </Nav>
        {localStorage.getItem("user-info") ? 
        <Nav>
            <NavDropdown title={user && user.name} >
                <NavDropdown.Item>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>

            </NavDropdown>
        </Nav>
        : null
        }
    </Navbar>
    </div>
    )
}

export default Header