import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import product_slider from '../../../assets/images/product-slider.png'
import Image from 'react-bootstrap/Image'

export default class ProductSlider extends Component {
  state = {
    display: true,
    width: 200,
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    return (
      <div>
        <h3> You may also like </h3>
        <Slider {...settings}>
          <div style={{ width: '25rem', margin: '0 1px' }}>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
          <div>
            <Image src={product_slider} style={{ width: '100%' }} />
            <span>Top woman</span>
            <h6>Angels malu zip jeans slim black used</h6>
            <h4>139,00 EUR</h4>
          </div>
        </Slider>
      </div>
    )
  }
}
