import React , {useEffect} from 'react'
import {
  Layout
} from 'antd';
const { Content } = Layout;
import { Route, Switch, useLocation } from 'react-router-dom'
import {connect} from "react-redux";


/**/
import HomePage from 'components/Home/index'
import { translateListData } from 'store/actions/translate'
import ScrollToTop from './ScrollToTop';
import HeaderComponent from "components/Template/Header";
import FooterComponent from "components/Template/Footer";


const routes = [
    {
        component: HomePage,
        exact: true,
        path: '/',
    },
]


const Routes:React.FC<any> = ({translate}) =>  {
  const location = useLocation();
  const pathname=location.pathname;

  // @ts-ignore
  return (
      <>



          <HeaderComponent />

          <main className={'main full '} role={'main'}  >

              <ScrollToTop />

              <Switch>
                  {
                      routes.map((route:any) => (
                          <Route {...route} key={route.path}/>
                      ))

                  }
              </Switch>

          </main>

          <FooterComponent />
      </>

  )
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => ({
    translate:  state.translate.translateData.result
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
