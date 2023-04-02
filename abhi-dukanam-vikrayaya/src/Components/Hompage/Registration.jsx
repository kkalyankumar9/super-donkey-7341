import { useReducer } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

 
const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error();
  }
}
 
const Register = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.email || !state.name || !state.password) {
  alert("all the fields required")
        
      
    } else {
      fetch("http://localhost:8080/Users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(state),
      })
        .then((res) => {
         alert("Registration Successful")
          navigate("/login");
          dispatch({type:"reset"})
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Box py={10} bg={"teal"}>
      <Box maxW={"lg"} mx={"auto"} boxShadow={"lg"} p={8} borderRadius={8} bg={"white"}>
        <Stack spacing={4}>
          <Heading>Register</Heading>
          <FormControl
            isRequired
            id="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          >
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Name" />
          </FormControl>
          <FormControl
            isRequired
            id="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          >
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Email" />
          </FormControl>
          <FormControl
            isRequired
            id="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          >
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            onClick={handleSubmit}
            disabled={
              !state.name || !state.email || !state.password ? true : false
            }
          >
            Register
          </Button>
          <Link to="/login">
            <Button>Back</Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
