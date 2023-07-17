import { Container, Row, Col } from 'react-grid-system'

const Order = () => {
  const orderList = JSON.parse(localStorage.getItem('orderBasket'))

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <ul
            className="order-list"
            style={{
              minHeight: '44rem',
              marginTop: '10rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {orderList?.map((order) => {
              return (
                <>
                  <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    <li>
                      {' '}
                      <strong>Order Date :</strong> {order.currentDate}
                    </li>
                    <li>
                      {' '}
                      <strong>Order Zip :</strong> {order.orderZip}
                    </li>
                    <li>
                      <ul>
                        <li>
                          {order?.orderProducts?.items?.map((item) => {
                            return (
                              <ul>
                                <li>
                                  <strong>Title:</strong> {item.title}
                                </li>
                                <li>
                                  <strong>Category:</strong> {item.category}
                                </li>
                                <li>
                                  <strong>Price:</strong> {item.price}
                                </li>
                                <li>
                                  <strong>Quantity:</strong> {item.qty}
                                </li>
                                <li>
                                  <img
                                    src={item.image}
                                    style={{ width: '50px' }}
                                    alt=""
                                  />
                                </li>
                              </ul>
                            )
                          })}
                        </li>
                      </ul>
                    </li>
                  </ul>{' '}
                  <br />
                </>
              )
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
export default Order
