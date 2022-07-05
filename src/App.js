import "./App.css";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <LoginButton />
        <LogoutButton />
        <strong>
          <p>User Information Below :</p>
        </strong>

        <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
