const Error = () => {
  const errorDiv = {
    minHeight: '66rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '26rem',
    background:
      ' linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(224,47,47,0.8240546218487395) 60%, rgba(252,176,69,1) 100%)',
  }
  const errorTitle = {
    fontSize: '10rem',
    fontFamily: 'cursive',
    fontWeight: '600',
  }
  return (
    <div style={errorDiv}>
      <h1 style={errorTitle}>Error 404</h1>
    </div>
  )
}
export default Error
