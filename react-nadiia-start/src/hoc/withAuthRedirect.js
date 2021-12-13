
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends Resct.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to ="login"/>
            return <Component {...this.props}/>
        }
    }

    
    
   let  ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent);

    return ConnectedAuthRedirectComponent;
}