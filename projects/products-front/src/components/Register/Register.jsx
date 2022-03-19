import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

import { registerUserAsync } from "../../slices/userSlice";

const Register = () => {
  const dispath = useDispatch();

  const responseSucessGoogle = (response) => {
    const { tokenId, profileObj } = response;
    const data = { isGoogleAccount: true, tokenId, profileObj };
    dispath(registerUserAsync(data));
  };

  const responseFailureGoogle = (response) => {
    console.log("Google failed ", response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        buttonText="Register"
        onSuccess={responseSucessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Register;
