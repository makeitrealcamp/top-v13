import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { loginAsync, selectUserLoggued } from "../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loggued = useSelector(selectUserLoggued);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const user = {
      email: elements[0].value,
      password: elements[1].value,
    };
    dispatch(loginAsync(user));
  };

  const responseSucessGoogle = (response) => {
    const user = {
      googleToken: response.tokenId,
      email: response.profileObj.email,
    };

    dispatch(loginAsync(user));
  };

  const responseFailureGoogle = (response) => {
    console.log("Response google error", response);
  };

  useEffect(() => {
    loggued && navigate("products");
  }, [loggued]);

  return (
    <Container>
      <h1>Products Front</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            data-test-id="email-input"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-test-id="passwd-input"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <GoogleLogin
          clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseSucessGoogle}
          onFailure={responseFailureGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Form>
    </Container>
  );
};

export default Login;
