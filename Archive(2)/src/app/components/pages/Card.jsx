import { Container, Row, Col } from 'react-grid-system'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from './Modal'

const Card = () => {
  const makeAppointment = () => {
    const user = localStorage.getItem('login')
    const storedPrdct = localStorage.getItem('storedProducts')
    if (user == null) {
      toast.error('login olun', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else {
      let submitOrder = document.querySelector('.submit-order')
      submitOrder.style.display = 'block'
      let orderForm = document.querySelector('.submit-order form')
      if (storedPrdct != null) {
        orderForm.addEventListener('submit', function () {
          const orderPhone = document.querySelector('#order-phone').value
          const orderZip = document.querySelector('#order-zip').value
          const orderCard = document.querySelector('#order-card').value
          const orderCVV = document.querySelector('#order-cvv').value
          const cardExpiry = document.querySelector('#card-expiry').value
          const orderProducts = JSON.parse(
            localStorage.getItem('storedProducts')
          )
          const date = new Date()
          let currentDay = String(date.getDate()).padStart(2, '0')
          let currentMonth = String(date.getMonth() + 1).padStart(2, '0')
          let currentYear = date.getFullYear()
          // we will display the date as DD-MM-YYYY
          let currentDate = `${currentDay}-${currentMonth}-${currentYear}`

          let orderInfo = {
            orderPhone: orderPhone,
            orderZip: orderZip,
            orderCard: orderCard,
            orderProducts: orderProducts,
            cardExpiry: cardExpiry,
            currentDate: currentDate,
          }
          const orderBasket =
            JSON.parse(localStorage.getItem('orderBasket')) ?? []

          orderBasket.push(orderInfo)
          localStorage.setItem('orderBasket', JSON.stringify(orderBasket))
          localStorage.removeItem('storedProducts')

          toast.success('sifaris edildi', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        })
      }
    }
  }
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
                              <span class="glyphicon glyphicon-remove"></span> 
                          </button>
                      </td>`

        let tr = document.createElement('tr')
        tr.dataset.index = index
        tr.innerHTML = td

        cartItems.prepend(tr)
      })
    }
    var removeBtns = document.querySelectorAll('.remote-from-basket')
    function calcTotalAndCount(storage) {
      storage.count = 0
      storage.total = 0
      storage.items?.forEach((item) => {
        storage.total += item.qty * item.price
        storage.count++
      })
      return storage
    }
    removeBtns.forEach((item) => {
      item.addEventListener('click', function () {
        let index = item.parentNode.parentNode.dataset.index
        storage.items.splice(index, 1)
        item.parentNode.parentNode.remove()

        //storage = calcTotalAndCount(storage)
        setStorage((old_data) => {
          let dd = (old_data = calcTotalAndCount(old_data))
          localStorage.setItem('storedProducts', JSON.stringify(dd))
          return dd
        })
        location.reload()
      })
    })
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={12}>
          <ToastContainer />
          <table className="table table-hover" style={{ minHeight: '66rem' }}>
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
          <button onClick={makeAppointment} className="shop-btn">
            Order
          </button>
          <Modal />
        </Col>
      </Row>
    </Container>
  )
}
export default Card
