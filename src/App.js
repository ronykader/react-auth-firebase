import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./App.css";
import Login from "./components/Login/Login";
function App() {
  let handleAlert = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>🔶</p>
        <p onClick={handleAlert}>Welcome to dev branch</p>
      </header>

      <Login />
    </div>
  );
}

export default App;
