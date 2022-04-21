import {useState} from "react"

const Login = () => {
  const  [error,setError] = useState(false)
  const  [password,setPassword] = useState("")
  const  [username,setUsername] = useState("")

  return (
    <div className="container">
    <form>
      <input type="test" placeholder="username"  value={username}/>
      <input type="password" placeholder="password" value={password}/>
      <button disabled="true">Login</button>
      <span data-testid="error" style={{visibility: error? "visible" : "hidden"}} >something went wrong</span>
    </form>
  </div>
  );
}

export default Login;
