import { useEffect, useState } from 'react'
import ListComponent from './ListComponent'
import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import top1small from '../../../assets/images/post-images/top1small.jpg'
import top2small from '../../../assets/images/post-images/top2small.jpg'
import top3small from '../../../assets/images/post-images/top3small.jpg'
import top4small from '../../../assets/images/post-images/top4small.jpg'
import top5small from '../../../assets/images/post-images/top5small.jpg'
import top1large from '../../../assets/images/post-images/top1large.jpg'
import top2large from '../../../assets/images/post-images/top2large.jpg'
import top3large from '../../../assets/images/post-images/top3large.jpg'
import top4large from '../../../assets/images/post-images/top4large.jpg'
import top5large from '../../../assets/images/post-images/top5large.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import size from '../../../assets/images/size.png'
import ProductSlider from './ProductSlider'

const Product = () => {
  const [count, setCount] = useState(1)
  const [products, setProducts] = useState([
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Details',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ])
  useEffect(() => {
    productGallery()
  })
  const productGallery = () => {
    let imageItems = document.querySelectorAll('.product-slider .images a')
    let baseImage = document.querySelector('.product-slider .base-image a')

    imageItems.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()

        if (this.classList.contains('active')) {
          return
        }

        document
          .querySelector('.product-slider .images a.active')
          .classList.remove('active')

        this.classList.add('active')

        let img = this.getAttribute('href')

        baseImage.children[0].setAttribute('src', img)
      })
    })
  }
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="product-slider">
              <div className="images">
                <div className="item">
                  <a href={top1large} className="active">
                    <Image src={top1small} className="img-fluid" />
                  </a>
                </div>
                <div className="item">
                  <a href={top2large}>
                    <Image src={top2small} className="img-fluid" />
                  </a>
                </div>
                <div className="item">
                  <a href={top3large}>
                    <Image src={top3small} className="img-fluid" />
                  </a>
                </div>
                <div className="item">
                  <a href={top4large}>
                    <Image src={top4small} className="img-fluid" />
                  </a>
                </div>
                <div className="item">
                  <a href={top5large}>
                    <Image src={top5small} className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="base-image">
                <a href="#">
                  <Image src={top1large} className="img-fluid" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-slider-info">
              <span className="span-tag">Home/Women Dress/Angela Mau</span>
              <button className="dashboard-btn fendi">fendi</button>
              <h1>
                Women Black Checked Fit <br /> and Flare Dress
              </h1>
              <div className="size-title">
                <h4>SELECT SIZE(INCHES)</h4>
                <a href="#">Size Guide</a>
              </div>
              <div className="size-image">
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
                <Image src={size} />
              </div>
              <div className="price-quantity">
                <div className="quantity">
                  <h3>Quantity</h3>
                  <div className="quantity-wrapper">
                    <span onClick={() => setCount((val) => val + 1)}>+</span>
                    <span>{count}</span>
                    <span onClick={() => setCount((val) => val - 1)}>-</span>
                  </div>
                </div>
                <div className="price">
                  <h3>Price Total</h3>
                  <span>{count * 90} eur</span>
                </div>
              </div>
              <select name="" id="" className="product-slider-select">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
              <div className="size-buttons">
                <button className="shop-btn-black">Add to Bag</button>
                <button className="shop-btn">
                  <AiOutlineHeart /> Save
                </button>
              </div>
              <div className="size-tags">
                <span>FREE SHIPPING</span>
                <span>PRODUCT CODE:RFKK1024</span>
                <span>TAGS:NEW ARRIVALS TOP WOMEN</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <section id="product-lists">
        <Container>
          <Row>
            <Col lg={10}>
              <div className="product-lists" style={{ minHeight: '66rem' }}>
                {products.map((product) => (
                  <ListComponent title={product.title} body={product.body} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="product-slider" style={{ overflow: 'hidden' }}>
        <Container fluid>
          <ProductSlider />
        </Container>
      </section>
    </>
  )
}
export default Product
