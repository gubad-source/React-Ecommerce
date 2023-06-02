import { useState } from 'react'

const TopToScroll = () => {
  const [visible, setVisible] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })
  const TopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    { visible } && (
      <button
        onClick={TopScroll}
        style={{
          display: 'inline-block',
          zIndex: '1',
          backgroundColor: '#828282',
          color: 'white',
          fontSize: '30px',
          position: 'fixed',
          right: '1%',
          bottom: '6%',
          padding: '5px 15px',
          fontWeight: 'bolder',
        }}
      >
        ^
      </button>
    )
  )
}
export default TopToScroll
