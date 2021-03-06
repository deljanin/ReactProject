import React from "react";
import "./sign-in-and-sign-up.style.scss";
import SignUp from "../../components/sign-up/sign-up.component";

import SignIn from "./sign-in/sign-in.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
