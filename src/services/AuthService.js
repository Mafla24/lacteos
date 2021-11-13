import axios from "axios";
//import jwtDecode from "jwt-decode";


const authUrl = "https://frozen-earth-23023.herokuapp.com/auth/";
//const authUrl = "http://localhost:4000/auth/";


export const authHeaders = {
    Authorization: "Bearer " + localStorage.getItem("token")
}

/*
export const loginAuth = async (credentials) => {
    return await axios.post(`${authUrl}/login`, credentials);
}

export const getCurrentUser = () => {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

*/

export const verifyToken = async () => {
    let verifyTokenData = await axios.get(`${authUrl}/authorized`,  {headers: authHeaders});
    if(!verifyTokenData.status === 200){
        logout();
    }
}

const logout = () => {
    localStorage.clear();
    window.location = "/home";
}

export const options = {
  method: 'POST',
  url: 'https://dev-qrqxbza8.us.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  body: {
    grant_type: 'client_credentials',
    client_id: '91laTp3WAUpZ43Li8IrTsGupTbqpwlq8',
    client_secret: '7-q9Nz4_XK4_I72IlZjQ0XZQXkNiUXcdnfO1lN4kbIsGVS3MfnhLuqW9Bi_N9pl4',
    audience: 'http://localhost:4000/'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
/*
  const callProtectedEndpoint = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${apiOrigin}/api/protected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      setState({
        ...state,
        showResult: true,
        endpointMessage: responseData
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
    }
  };
  */