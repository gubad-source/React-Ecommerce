import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'

const Card = () => {
  useEffect(() => {
    reloadStorage()
  })
  const [storage, setStorage] = useState(
    JSON.parse(
      localStorage.getItem('storedProducts') ??
        '{"items":[],"count":0,"total":0}'
    )
  )
  const reloadStorage = () => {
    let cartItems = document.querySelector('.cart-items')
    if (storage.items != null) {
      storage.items.forEach((item, index) => {
        let td = `<td class="col-sm-8 col-md-6">
                          <div class="media">
                              <a class="thumbnail pull-left" href="#"> 
                                  <img class="media-object" src="${
                                    item.image
                                  }" style="width: 72px; height: 72px;">
                              </a>
                            
                          </div></td>
                          <td class="col-sm-1 col-md-1" style="text-align: center">
                          <input type="email" class="form-control" id="exampleInputEmail1" value="${
                            item.qty
                          }">
                          </td>
                          <td class="col-sm-1 col-md-1 text-center"><strong>${
                            item.price
                          } ₼</strong></td>
                          <td class="col-sm-1 col-md-1 text-center"><strong>${
                            item.price * item.qty
                          } ₼</strong></td>
                          <td class="col-sm-1 col-md-1">
                          <button type="button" class="btn btn-danger remote-from-basket" data-id="${
                            item.id
                          }">
                              <span class="glyphicon glyphicon-remove"></span> Remove
                          </button>
                      </td>`

        let tr = document.createElement('tr')
        tr.dataset.index = index
        tr.innerHTML = td

        cartItems.prepend(tr)
      })
    }
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={12}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
                <th> </th>
              </tr>
            </thead>
            <tbody className="cart-items"></tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}
export default Card
