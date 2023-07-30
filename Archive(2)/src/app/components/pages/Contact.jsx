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
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24319.103892286643!2d49.9647335!3d40.367008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1690046027527!5m2!1sen!2saz"
              width="100%"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Contact
