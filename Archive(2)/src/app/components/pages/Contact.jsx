import { Container, Row, Col } from 'react-grid-system'
import { TiSocialInstagram } from 'react-icons/ti'
import { FaWhatsapp } from 'react-icons/fa'
import { MdContactless } from 'react-icons/md'
import { BiMessageCheck } from 'react-icons/bi'
const Contact = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="contact-title">
            <h1>Contact Us Through...</h1>
            <div className="contact-title__icon">
              <MdContactless />
            </div>
          </div>

          <div className="contact">
            <div className="contact__icon">
              <TiSocialInstagram />
            </div>
            <div className="contact__info">
              You can contact us via instagram,linkedin and facebook
            </div>
            <div className="contact__button shop-btn">Click</div>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <FaWhatsapp />
            </div>
            <div className="contact__info">
              You can contact us via telegram and whatsapp +994 *** ** **
            </div>
            <div className="contact__button shop-btn">Click</div>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <BiMessageCheck />
            </div>
            <div className="contact__info">
              You can send us messages through gmail and yahoo
            </div>
            <div className="contact__button shop-btn">Click</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Contact
