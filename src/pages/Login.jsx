import { Link } from "react-router-dom"
export const Login = () => {
  return (
    <>
       <div>
            <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión y Administra tu <span className="text-black">Flotilla</span></h1>
       </div>
       <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form action="">
                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Correo</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="email" placeholder="Tu correo"  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Contraseña</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Contraseña"  />
                </div>

                <input type="submit" value="Iniciar Sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
            </form>

            <nav className="mt-10">
                <Link className="block my-5 text-center md:text-left text-gray-500" to="/register">Registrar como administrador</Link>
            </nav>

       </div>
    </>
  )
}
