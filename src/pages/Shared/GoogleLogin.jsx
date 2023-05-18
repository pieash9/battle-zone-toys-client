// import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin =() =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>console.log(err))
    }
    
  return (
    <div className=" ">
      <div className="divider">OR</div>
      <div className="flex items-center flex-col mt-8">
        <div onClick={handleGoogleLogin} className="flex items-center btn btn-ghost px-5 normal-case">
          <p className="text-lg font-medium">Log in with</p>
          <img
            className=" h-8 w-8 ml-2"
            src="https://i.ibb.co/bQKgM5n/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
