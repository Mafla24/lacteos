import { Auth0Provider } from "@auth0/auth0-react";
import Routes from "./routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-qrqxbza8.us.auth0.com"
        clientId="91laTp3WAUpZ43Li8IrTsGupTbqpwlq8"
        redirectUri={window.location.origin}
    audience="http://localhost:4000/"
    scope="read:users update:users"
      >
        <Routes />
      </Auth0Provider>
    </div>
  );
}

export default App;
