import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BlogImage from '../../../assets/images/image 2.png'
const Blog = () => {
  return (
    <>
      <section id="blog-background">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="blog-background-title">
                <h1>what to wear to summer wedding this year?</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="blog">
        <Container>
          <Row className="blog-row">
            <Col lg={9}>
              <div className="blog">
                <h1>the dress</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima saepe debitis ipsum provident suscipit? Voluptate,
                  deserunt eveniet libero saepe, quaerat iusto officiis modi
                  architecto animi corrupti aspernatur esse doloremque repellat
                  ullam nemo enim, sapiente consequuntur. Nobis nulla aspernatur
                  blanditiis, vel ullam veniam, deleniti omnis quasi, ab maiores
                  similique illo impedit? <br />
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima saepe debitis ipsum provident suscipit? Voluptate,
                  deserunt eveniet libero saepe, quaerat iusto officiis modi
                  architecto animi corrupti aspernatur esse doloremque repellat
                  ullam nemo enim, sapiente consequuntur. Nobis nulla aspernatur
                  blanditiis, vel ullam veniam, deleniti omnis quasi, ab maiores
                  similique illo impedit? <br />
                </p>
                <div className="blog__image">
                  <img src={BlogImage} alt="" className="img-fluid" />
                </div>
                <h1>the dress</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima saepe debitis ipsum provident suscipit? Voluptate,
                  deserunt eveniet libero saepe, quaerat iusto officiis modi
                  architecto animi corrupti aspernatur esse doloremque repellat
                  ullam nemo enim, sapiente consequuntur. Nobis nulla aspernatur
                  blanditiis, vel ullam veniam, deleniti omnis quasi, ab maiores
                  similique illo impedit? <br />
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima saepe debitis ipsum provident suscipit? Voluptate,
                  deserunt eveniet libero saepe, quaerat iusto officiis modi
                  architecto animi corrupti aspernatur esse doloremque repellat
                  ullam nemo enim, sapiente consequuntur. Nobis nulla aspernatur
                  blanditiis, vel ullam veniam, deleniti omnis quasi, ab maiores
                  similique illo impedit? <br />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Blog
