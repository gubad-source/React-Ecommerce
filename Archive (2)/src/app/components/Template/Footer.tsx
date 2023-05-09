import React, {useEffect, useLayoutEffect, useState} from "react";
import {translateListData} from "store/actions/translate";
import {connect} from "react-redux";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useActions} from "hooks/useActions";

const FooterComponent:React.FC<any> = ({translate}) => {
    const { translateListData } = useActions()
    const location = useLocation();
    const pathname=location.pathname;


    useLayoutEffect(() => {
        translateListData();
    }, [])

    useEffect(() => {


    }, [translate])


    return (
        <footer>
            Footer
        </footer>
    )
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => {
    return {
        translate:  state.translate.translateData?.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)
