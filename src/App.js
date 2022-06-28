import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();


  return (
    <div className="App">

        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
        </button>

        <Profile />

    </div>
  );
}

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default App;
