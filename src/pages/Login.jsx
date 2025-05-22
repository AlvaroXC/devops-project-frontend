export const Login = () => {
  return (
    <>
       <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión y Administra tu <span className="text-black">Flotilla</span></h1>
       </div>
       <div>
            <form action="">
                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Usuario</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Usuario"  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Contraseña</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Contraseña"  />
                </div>

                <input type="submit" value="Iniciar Sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
            </form>

       </div>
    </>
  )
}
