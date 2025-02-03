import{ useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route,useLocation,useNavigate } from 'react-router-dom';
import Header from "../Header";
import MainLayout from './MainLayout';
import { Home,Dashboard,Login,PageNotFound } from '../pages';
import { userAuth } from '../../context/AuthContex';
import { decodeToken } from "../../helpers/auth/Auth"
import { DndContext } from "@dnd-kit/core";



const RoutesPath = (props) => {
  const { loggedUser } = userAuth();
    const [user, setUser] = useState({ username: '' });
    const [processing, setProcessing] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); 



    const [formFields, setFormFields] = useState([]);

    const handleDragEnd = (event) => {
      const { active, over } = event;
  
      if (over?.id === "form-canvas") {
        setFormFields((prev) => [...prev, { ...active.data.current, id: Date.now() }]);
      }
    };

    


    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setProcessing(true);
            }, 300);

            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = await decodeToken(token);
                    if (res) {
                        setUser(res);
                    }
                } catch (error) {
                    console.error("Error decoding token:", error);
                }
            }
        };

        fetchData();
    }, []);

    const routesMatcher = ["/","/dashboard","/form","/profile"];
    const regex = /^\/$/;
    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                
                { 
                (() => {
                    if( !routesMatcher?.includes(location?.pathname)){
                        return (
                            <Routes>
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        ); 
                    }
                    if (user?.username?.length === 0 || user?.username === undefined ) {
                        if (regex.test(location.pathname)) {
                            return (
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                </Routes>
                            );
                        }
                         else {
                            return (
                                <Routes>
                                    <Route path="*" element={<Login />} />
                                    <Route path="/login" element={<Login />} />
                                </Routes>
                            );
                        }
                    } else {
                        if (regex.test(location.pathname)) {
                            return (
                                <>
                                    {/* <Header /> */}
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                    </Routes>
                                </>
                            );
                        }
                        return (
                            <>
                                <Header />
                                <Routes>
                                    <Route path="/*" element={<MainLayout  formFields={formFields}  />} />
                                </Routes>
                            </>
                        );
                    }
                })()
                }     
                    </DndContext>
           
        </>
    );
};

export default RoutesPath;
