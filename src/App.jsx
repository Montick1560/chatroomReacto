import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Col,Row } from 'react-bootstrap'
import WaitingRoom from './Components/WaitingRoom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
            <h1 className='font-weight-light'>WELCOME TO THE CHATROOM</h1>
            </Col>
          </Row>
          <WaitingRoom/>
        </Container>
      </main>
    </>
  )
}

export default App
