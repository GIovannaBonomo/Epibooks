import horror from '../data/horror.json'
import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'

function AllTheBooks() {
  return (
    <Container className="my-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {horror.map(book => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks