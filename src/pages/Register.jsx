import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Alert } from '../components/Alert'
import axios from 'axios'

export const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invitationCode, setInvitationCode] = useState('') 
    const [confirmedPassword, setconfirmedPassword] = useState('') 
    const [alertMessage, setAlertMessage] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if([email, password, invitationCode].includes('')){
            setAlertMessage({msg:'Todos los campos son requeridos', error: true})
            return
        }

        if(password !== confirmedPassword){
            setAlertMessage({msg:'Las contraseñas no coinciden', error: true})
            return 
        }

        if(password.length < 8){
            setAlertMessage({msg:'La contraseña debe ser de almenos 8 caracrteres', error: true})
            return
        }

        setAlertMessage({})

        try {
            const response = await axios.post('http://127.0.0.1:5001/admin/register', {
                email,
                password, 
                invite_code: invitationCode
            })
            setAlertMessage({msg: response.data.message, error: false})
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            setAlertMessage({msg: error.response.data.message, error: true})
        }

    }

    const {msg} = alertMessage

  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">Registrate y Administra tu <span className="text-black">Flotilla</span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            
            {msg && 
                <Alert
                    alertMessage={alertMessage}
                />
            }

            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Correo</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="email" placeholder="Tu correo" value={email} onChange={e => setEmail(e.target.value)}  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Contraseña</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}  />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Repetir contraseña</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Repetir contraseña" value={confirmedPassword} onChange={e => setconfirmedPassword(e.target.value)}  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-500 block text-xl font-bold">Código de Invitación</label>
                    <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="text" placeholder="Código de Invitación" value={invitationCode} onChange={e => setInvitationCode(e.target.value)} />
                </div>
                <input type="submit" value="Registrar" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  />
            </form>

            <nav className="mt-10">
                <Link className="block my-5 text-center md:text-left text-gray-500" to="/">Iniciar Sesión</Link>
            </nav>

       </div>

    </>
  )
}