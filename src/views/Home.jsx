import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className='text-center'>
      <h1 className='pt-5'>
        Bienvenido a <span className='fw-bold'>Happy Cake</span>
      </h1>
      <h4 className='pt-2'> El lugar de los pasteles felices</h4>
      <p className='emoji pt-2'>🎂</p>
    </Container>
  )
}

export default Home