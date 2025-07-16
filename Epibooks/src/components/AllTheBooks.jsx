import horror from '../data/horror.json'
import { Container, Row, Col, Card } from 'react-bootstrap'
import SingleBook from './SingleBook';

function AllTheBooks() {
  console.log(horror);
  return (
    <Container className="my-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {horror.map(book => (
          <Col key={book.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} />
            </Card>
          </Col>
        ))}
      </Row>
      <Col key={book.asin}>
        <SingleBook book={book} />
      </Col>
    </Container>
  )
}
export default AllTheBooks