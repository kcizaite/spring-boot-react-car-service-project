import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import {AuthProvider} from './components/context/AuthContext'
import {PrivateRoute} from './components/misc/PrivateRoute'
import {Navbar} from './components/misc/Navbar'
import {Home} from './components/home/Home'
import {Login} from './components/home/Login'
import {AdminPage} from './components/admin/AdminPage'
import {UserPage} from "./components/user/UserPage";


function App() {
    return (
        <div className="App">
            <div>
                <AuthProvider>
                    <Router>
                        <Navbar/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            {/*<Route path='/signup' element={<Signup />} />*/}
                            <Route path="/adminpage" element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
                            <Route path="/userpage" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    </Router>
                </AuthProvider>
            </div>

        </div>

    );
}

export default App;
