import useRoutes from "../hooks/useRoutes"
import { Route } from "./Route"

export const ListRoutes = () => {
    const { routes } = useRoutes()

    return (
        <>
            {routes.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Rutas</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Rutas</span>
                    </p>

                    {routes.map(route => (
                        <Route
                            key={route.id}
                            route={route}
                        />
                    ))}
                </>   
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Rutas</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando rutas {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
} 