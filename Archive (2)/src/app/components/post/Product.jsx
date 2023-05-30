import { useState } from 'react'
import ListComponent from './ListComponent'

const Product = () => {
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
  ])
  return (
    <section id="product-lists">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="product-lists" style={{ minHeight: '66rem' }}>
              {products.map((product) => (
                <ListComponent title={product.title} body={product.body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Product
