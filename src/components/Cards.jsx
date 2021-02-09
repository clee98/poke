import react from 'react'
import { Card, Button } from 'react-bootstrap'

class Cards extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      image: ""
    }
  }

  componentDidMount() {
    // Retrieve each separate pokemon's api link and get information through that link and store
    // in state variables
  }



  render() {
    return (
      <Card style={{ width: '18rem' }} key={0} className='box'>
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text>
            {}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Cards;