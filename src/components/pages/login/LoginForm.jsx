import { useState } from "react"
export default function LoginForm() {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setName("")
    alert(`Bonjour ${name}`)
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <h3>Connectez-vous</h3>
      <input type="text" value={name} onChange={handleChange} placeholder="Entrez votre prénom..." required />
      <button>Accéder à votre espace</button>
    </form>
  )
}
