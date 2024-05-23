const Card = ({ persona}) => {
  return (
    <>
    <h2>Elegiste el campeon: {persona.nombre}</h2>
    <h3>Tu rol es: {persona.rol}</h3>
    <h3>La informacion se enviara a: {persona.email}</h3>
    </>
  )
}

export default Card