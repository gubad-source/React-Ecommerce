import React, {useEffect, useLayoutEffect, useState} from "react";
import {translateListData} from "store/actions/translate";
import {connect} from "react-redux";
import { useScrollYPosition } from 'react-use-scroll-position';
import {Link, useLocation, NavLink} from "react-router-dom";
import {useActions} from "hooks/useActions";
import {useHistory} from "react-router";

const HeaderComponent:React.FC<any> = ({translate}) => {
    const { translateListData } = useActions()
    const location = useLocation();
    const navigate = useHistory();
    const pathname=location.pathname;
    const scrollY = useScrollYPosition();



    useLayoutEffect(() => {
        translateListData();
    }, [])

    useEffect(() => {


    }, [translate])


    return (
       <header>
           Header
       </header>
    )
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => {
    return {
        translate:  state.translate.translateData?.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
