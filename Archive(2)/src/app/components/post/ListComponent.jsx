import { useState } from 'react'
const ListComponent = ({ title, body }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="product-information">
        <div
          className="product-information__title"
          onClick={() => setVisible((old_data) => !old_data)}
        >
          <h2>{title}</h2>
          <h2>-</h2>
        </div>
        {visible && <div className="product-information__body">{body}</div>}
      </div>
    </>
  )
}
export default ListComponent
