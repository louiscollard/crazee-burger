import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import styled from 'styled-components';
export default function LoginForm() {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/order", { state: { name } })
    setName("")
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input type="text" value={name} onChange={handleChange} placeholder="Entrez votre prénom..." required />
        </div>
        <button className="button-with-icon">
          <span>Accéder à votre espace</span>
          <IoChevronForward className="icon" />
        </button>
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
    margin: 30px;
  }
  
  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px 10px;
  }

  .input-with-icon {
    background: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      margin-right: 8px;
      color: #93a2b1;
      font-size: 15px;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }

  }

  .button-with-icon {
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
  }
`
