import { createContext, useState, useEffect } from "react";
import axios from "axios";

const RoutesContext = createContext();

const RoutesProvider = ({ children }) => {
    const [routes, setRoutes] = useState([]);
    const [route, setRoute] = useState({});

    useEffect(() => {
        const getRoutes = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                };

                const { data } = await axios('http://127.0.0.1:5001/routes/', config);
                setRoutes(data.data || []);
            } catch (error) {
                console.log(error);
            }
        };


        getRoutes();
    }, []);

    const saveRoute = async (routeData) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        // Transformar los datos según la estructura esperada por el backend
        const transformedData = {
            route_name: routeData.name,
            route_date: routeData.date,
            start_lat: parseFloat(routeData.origin_lat),
            start_lng: parseFloat(routeData.origin_lng),
            end_lat: parseFloat(routeData.destination_lat),
            end_lng: parseFloat(routeData.destination_lng),
            assignment_id: parseInt(routeData.assignment_id),
            status: routeData.status,
            description: routeData.problem_description || '',
            comments: routeData.comments || ''
        };

        if (routeData.id) {
            try {
                const { data } = await axios.put(
                    `http://127.0.0.1:5001/routes/${routeData.id}`,
                    transformedData,
                    config
                );

                setRoutes(prevRoutes =>
                    prevRoutes.map(r =>
                        r.id === routeData.id ? data.data : r
                    )
                );
            } catch (error) {
                throw error.response?.data?.message || 'Error al actualizar la ruta';
            }
        } else {
            try {
                const { data } = await axios.post('http://127.0.0.1:5001/routes/', transformedData, config);
                if (data.id) {
                    const newRouteResponse = await axios.get(`http://127.0.0.1:5001/routes/${data.id}`, config);
                    setRoutes(prevRoutes => [...prevRoutes, newRouteResponse.data.data]);
                }
            } catch (error) {
                throw error.response?.data?.message || 'Error al crear la ruta';
            }
        }
    };

    const updateRoute = (route) => {
        setRoute(route);
    };

    const deleteRoute = async id => {
        const confirmDelete = confirm('¿Deseas eliminar esta ruta?');
        if (confirmDelete) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                };
                await axios.delete(`http://127.0.0.1:5001/routes/${id}`, config);
                setRoutes(prevRoutes =>
                    prevRoutes.filter(route => route.id !== id)
                );
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (
        <RoutesContext.Provider
            value={{
                routes,
                route,
                saveRoute,
                updateRoute,
                deleteRoute,
            }}
        >
            {children}
        </RoutesContext.Provider>
    );
};

export {
    RoutesProvider
};

export default RoutesContext; 