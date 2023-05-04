import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Routing() {
  const [isLogin, setLogin] = useState(false)

  return (
    <>
      <Nav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<h3>Root Element</h3>} />
        <Route path="/login" element={<Login
            loginHandler={() => setLogin(true)}
          />}
        />
        <Route path="/Signup" element={<Signup />} />

        {isLogin &&
          <Route path="/todos">
            <Route path="" element={<Todos />} />
            <Route path=":id" element={<Todo />} />
          </Route>
        }

        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  );
}

const Todos = () => {
  return (
    <>
      <Link to="/todos/1">TODO 1</Link><br />
      <Link to="/todos/2">TODO 2</Link><br />
      <Link to="/todos/3">TODO 3</Link>
    </>
  )
}

const Todo = () => {
  const {id} = useParams()
  return (
    <>
      <h3>TODO Item # {id}</h3>
    </>
  )
}

const Login = ({loginHandler}) => {
  return (
    <>
      <h3>Login Element</h3>
      <button
        className='btn btn-primary'
        onClick={loginHandler}
      >Login</button>
      <Link to="/signup">Signup</Link>
    </>
  )
}

const Signup = () => {
  const navigate = useNavigate()
  // const autoNav = () => navigate('/')

  setTimeout(() => {
    navigate('/')
  },3000)

  return (
    <>
      <h3>Signup Page</h3>
      <button
        className='btn btn-primary'
        onClick={() => navigate('/')}
      >Signup</button>
      <Link to="/login">Login</Link>
    </>
  )
}


const Nav = ({isLogin}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {isLogin &&
              <li className="nav-item">
                <Link className="nav-link" to="/todos">TODOs</Link>
              </li>
            }  
            <li className="nav-item">
              <Link  className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Routing;
