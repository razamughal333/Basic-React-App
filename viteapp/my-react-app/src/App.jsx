import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  return <h1>Home Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in!");
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link
          to="/home"
          className="text-purple-700"
          style={{ textDecoration: "underline" }}
        >
          Home
        </Link>
        <br />
        <Link
          to="/login"
          className="text-purple-700"
          style={{ textDecoration: "underline" }}
        >
          Login
        </Link>
        <br />
        <Link
          to="/user/1"
          className="text-purple-700"
          style={{ textDecoration: "underline" }}
        >
          User 1
        </Link>
        <br />
        <Link
          to="/user/2"
          className="text-purple-700"
          style={{ textDecoration: "underline" }}
        >
          User 2
        </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <h1>{user ? user.name : "loading.."}</h1>
      <p>{user ? user.email : ""}</p>
    </div>
  );
}

export default App;
