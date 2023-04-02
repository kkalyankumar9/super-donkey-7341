import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  error: null,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const toast = useToast();

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_IS_LOADING", payload: true });
    fetch("http://localhost:8080/Users")
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(
          (user) => user.email === state.email && user.password === state.password
        );
        if (user) {
          toast({ title: "Login successful!", status: "success" });
          navigate("/");
        } else {
          dispatch({ type: "SET_ERROR", payload: "Invalid email or password." });
        }
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: "Unable to login. Please try again later." });
      })
      .finally(() => {
        dispatch({ type: "SET_IS_LOADING", payload: false });
      });
  };

  return (
    <Box >
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg"bg={"white"}>
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={state.email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={state.password} onChange={handlePasswordChange} />
        </FormControl>
        {state.error && (
          <Text mt={4} color="red.500">
            {state.error}
          </Text>
        )}
        <Button type="submit" mt={8} isLoading={state.isLoading} colorScheme="teal">
          Login
        </Button>
      </form>
      <Text>   Don't have an account</Text>
      <Button bg={"grey"} border={"none"} color={"black"} ><Link to="/register"  tittl="Register"> Register here.</Link></Button>
      
    </Box>
    </Box>
  );
};

export default Login;
