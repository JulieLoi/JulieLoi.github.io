import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar.component';
import { PageEnum } from '../Enums';
import Sidebar from '../components/Sidebar.component';
import Portfolio from '../components/Portfolio.component';
import homeStyle from '../stylesheets/Home.module.css';

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar 
                active={PageEnum.Home}
            />
            <Container fluid className={homeStyle["background"]}>
                <Row>
                    <Col xs={3} className={homeStyle["sidebar"]}>
                        <Sidebar />
                    </Col>
                    <Col className={homeStyle["portfolio"]}>
                        <Portfolio />
                    </Col>
                </Row>
            </Container>
        </>
        
    );
};

export default HomePage;
