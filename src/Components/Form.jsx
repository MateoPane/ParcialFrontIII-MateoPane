import { useState } from "react"
import ErrorMessage from "./ErrorMessage";
import Card from "./Card";
import FormStyles from "../Styles/Form.module.css"

const Form = () => {
    const [persona, setPersona] = useState({
        nombre: '',
        rol: '',
        email: '',
    })
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(persona.nombre.trim().length > 3 && persona.rol.length > 6 && regex.test(persona.email)){
            setShow(true);
            setError(false);
        }else{
            setError(true);
            setShow(false);
        }
    }
  return (
    
    <div className={FormStyles.formContainer}>
    <form onSubmit={handleSubmit}>
        <label>Nombre del campeon</label>
        <input type="text" value={persona.nombre} onChange={(e) => setPersona({...persona, nombre: e.target.value})} placeholder="Ingrese al campeon"/>
        <label>Rol</label>
        <input type="text" value={persona.rol} onChange={(e) => setPersona({...persona, rol: e.target.value})} placeholder="Ingresa tu rol"/>
        <label>Email</label>
        <input type="text" value={persona.email} onChange={(e) => setPersona({...persona, email: e.target.value})} placeholder="Ingresa tu email"/>
        <button>Enviar Datos</button>
        </form>
        {show && <Card persona={persona}/>}
        {error && <ErrorMessage/>}
    </div>
  )
}

export default Form