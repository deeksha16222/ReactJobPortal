import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onSignIn, onSignOut, setName, setImage } from '../redux/actions'


class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.auth2.init({
                clientId: "384505260599-9gbv3v8i1pl92dt6kvf6nqrr1khtb9g9.apps.googleusercontent.com",
                scopes: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // console.log(this.auth);
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.onSignIn()
            const name = this.auth.currentUser.ee.Es.bT
            const image = this.auth.currentUser.ee.Es.fI
            this.props.setName(name)
            this.props.setImage(image)
        }
        else {
            this.props.onSignOut()
        }
    }
    onSignInClick = async() => {
       await this.auth.signIn();
        const name = this.auth.currentUser.ee.Es.bT
        const image = this.auth.currentUser.ee.Es.fI
        this.props.setName(name)
        this.props.setImage(image)
    }
    onSignOutClick = () => {
        this.auth.signOut();
        this.props.setName("");
        this.props.setImage("")
    }

    renderAuth = () => {
        if (this.props.isSignedIn) {
            return (
                <button className="btn" onClick={this.onSignOutClick} >Sign Out</button>
            )
        }
        else if (!this.props.isSignedIn) {
            return (
                <button className="btn" onClick={this.onSignInClick} >Sign In</button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuth()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { onSignOut, onSignIn, setName, setImage })(GoogleAuth)


