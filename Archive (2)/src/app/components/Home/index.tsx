import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

import { translateListData } from 'store/actions/translate'

/*new*/
import { connect } from 'react-redux'
import { useActions } from 'hooks/useActions'
import Catalog from 'components/pages/Catalog'

const HomePage: React.FC<any> = ({ translate }) => {
  const { translateListData } = useActions()

  useLayoutEffect(() => {
    translateListData()
  }, [])

  useEffect(() => {}, [translate])

  return <>Home</>
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => {
  return {
    translate: state.translate.translateData?.result,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
