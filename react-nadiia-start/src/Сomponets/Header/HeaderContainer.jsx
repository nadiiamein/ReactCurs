import React from 'react';
import Header from "./Header.jsx";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reduce";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    conponentDidMount() {
        this.props.getAuthUserData();
        authAPI.me
    }
    render() {

return <Header {...this.props} />
    }
    
}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);