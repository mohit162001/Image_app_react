import React from "react";
import './nav.css'
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated,logout,user } = useAuth0();
    return (
      <>
        <div class="topnav">
          <h4 className="heading">DYNAMIC SEARCH</h4>    
          <p>{isAuthenticated && <p>{user.name}</p>}{
            isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000/" } })}>
            Log Out
          </button> :<button className="lbutton" onClick={() => loginWithRedirect()}>Log In</button>
          }</p>
          
          <a href="">Home</a>
          
        </div>
      </>
    );
  };
    
  export default NavBar;