import axios from "axios"
import {useState} from "react"

const Login = () => {
  const  [error,setError] = useState(false);
  const  [loading,setLoading] = useState(false);
  const  [password,setPassword] = useState("");
  const  [username,setUserName] = useState("");
  const  [user,setUser] = useState({});

  const handleClick = async(e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setUser(data)
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div className="container">

    <form>
      <input type="test" placeholder="username"  value={username} onChange={e => setUserName(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button disabled={!username || !password} onClick={handleClick}>
       { loading ? "please wait" : "Login"}
      </button>
      <span data-testid="error" style={{visibility: error? "visible" : "hidden"}} >something went wrong</span>
    </form>
    <span className="user">{user.name}</span>
  </div>
  );
}

export default Login;
