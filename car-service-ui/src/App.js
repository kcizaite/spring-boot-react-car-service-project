import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import {AuthProvider} from "./components/context/AuthContext";
import {Navbar} from "./components/misc/Navbar";
import {Home} from "./components/home/Home";
import {Login} from "./components/home/Login";
import {Signup} from "./components/home/Singup";
import {PrivateRoute} from "./components/misc/PrivateRoute";
import {AdminPage} from "./components/admin/AdminPage";
import {UserPage} from "./components/user/UserPage";
import {ServiceCreatePage} from "./components/servicing/ServiceCreate";
import {MechanincsCreatePage} from "./components/mechanics/MechanicCreate";

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
                            <Route path='/signup' element={<Signup />} />
                            <Route path="/adminpage" element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
                            <Route path="/userpage" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
                            <Route path="/create-service" element={<ServiceCreatePage/>} />
                            <Route path="/create-mechanic" element={<MechanincsCreatePage/>} />
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    </Router>
                </AuthProvider>
            </div>

        </div>

    );
}

export default App;
