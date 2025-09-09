import { useState } from "react"

export default function LoginPage() {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    setName("")
    alert(`Bonjour ${name}`)
  }

  return (
    <>
      <h1>Bienvenue chez nous!</h1>
      <h3>Connectez-vous</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Entrez votre prénom..." required/>
        <button>Accéder à votre espace</button>
      </form>
    </>
  )
}
