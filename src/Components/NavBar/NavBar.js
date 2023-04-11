import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const  NavBar =()=>{
    return (
     



        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">FavList</Navbar.Brand>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FavList">FavList</Nav.Link>
  
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;

