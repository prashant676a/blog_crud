import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'



function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    let navigate = useNavigate()
    const [isLogin, setLogin] = useState(true)


    useEffect(()=> {
      var user_token = token['mytoken']
      console.log('Login User token is',user_token)
    console.log('Data type',typeof(token['mytoken']))

        if(String(user_token) === 'undefined'){
            navigate('/')
        }else{
            navigate('/articles')
          }

    }, [token])

    const loginBtn = () => {
     if(username.trim().length !==0 && password.trim().length){
         console.log('Username And Password Are Set')
         APIService.LoginUser({username,password})
         .then(resp => setToken('mytoken', resp.token))
         .catch(error => console.log(error))
     }else{
        console.log('Username And Password Are Not Set')
         navigate('/')
     }
    }


    const RegisterBtn = () => {
        if(username.trim().length !== 0 && password.trim().length !== 0){
            console.log('Username and password are set');
            APIService.RegisterUser({username, password})
            .then(() => loginBtn())
            .catch(error => console(error))
        }else{
            navigate('/')
            console.log('Username and password are not set');

        }
    }


    const loginStyle={
        backgroundImage:`url(${process.env.PUBLIC_URL+ "img/18.jpg"})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                'min-height': '100%',
                height:'77vh',
                backgroundPosition:' center',
                margin:0,
            
                };


                return (
                    <div className="App">
                        <div className="container-fluid">
                            <div className="row justify-content-center"> {/* Center the login section */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="alert alert-secondary">Blog Application</h1>
                                            <br />
                                            <br />
                                            {isLogin ? <h3>Login</h3> : <h3>Register</h3>}
                                            <div className="form-group row">
                                                <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
                                                <div className="col-sm-8">
                                                    <input type="text" value={username} className="form-control" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                                                </div>
                                            </div>
            
                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                                <div className="col-sm-8">
                                                    <input type="password" value={password} className="form-control" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                                                </div>
                                            </div>
            
                                            <div className="text-center">
                                                {isLogin ?
                                                    <div>
                                                        <button onClick={loginBtn} className="btn btn-primary btn-lg">Login</button>
                                                        <p>If You Don't Have Account, Please <button onClick={() => setLogin(false)} className="btn btn-link">Register</button></p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <button onClick={RegisterBtn} className="btn btn-success btn-lg">Register</button>
                                                        <p>If You Have Account, Please <button className="btn btn-link" onClick={() => setLogin(true)}>Login</button></p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                
}

export default Login