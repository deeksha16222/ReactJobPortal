import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import { connect } from 'react-redux'
import '../Nav.css'

const Nav = (props) => {

  return (
    <div className="navbar">
        <Link className="link" to="/find-jobs">Find jobs</Link>
        <Link className="link" to="/profile">See Profile</Link>
        <Link className="link" to="/companies">See Companies </Link>
        <div className="user">
        <p>Hey, <b>{props.name ? props.name : "User"}</b></p>
        <img src={props.image ? props.image : "https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"} alt=""/>
        </div>
        <GoogleAuth />
        {/* <GoogleLogin 
        icon={false}
        className="login"
        clientId="384505260599-a7ab9t3ktvs1h5scifrvegggl9k794s2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
        */}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    name : state.auth.name,
    image : state.auth.image
  }
}
export default connect( mapStateToProps )(Nav)
