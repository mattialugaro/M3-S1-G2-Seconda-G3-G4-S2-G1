import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

const AllTheBooks = () => (
    <Row className="g-3">
        
        {horror.map((book) => (
            <Col xs={6} sm={4} md={3} key={book.asin}>
                <Card style={{height:"620px", borderColor:"blue"}}>
                <Card.Img variant="top" style={{width:"100%", height:"480px"}} src={book.img} />
                <Card.Body>
                    <Card.Title className="text-break">{book.title}</Card.Title>
                    <Card.Text className="border border-primary border-2 rounded-3 p-1 d-inline mt-1">{book.price} $</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        )
    )}
    </Row>
)

export default AllTheBooks
