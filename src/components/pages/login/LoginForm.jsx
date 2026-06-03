import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import { theme } from "../../../theme";
import Button from "../../shared/Button";
import TextInput from "../../shared/TextInput";
export default function LoginForm() {
  const [TextInputValue, setTextInputValue] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setTextInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTextInputValue("")
    navigate(`order/${TextInputValue}`)
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput value={TextInputValue} onChange={handleChange} Icon={<BsPersonCircle />} placeholder={"Entrez votre prénom..."} className="input-login" version="normal" required />
        <Button label={"Accéder à votre espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.family.stylish};

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    margin: 30px;
    font-family: ${theme.fonts.family.stylish}
  }
  
  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
    font-family: ${theme.fonts.family.stylish}
  }


  .input-login {
    margin: 18px 0;
  }
`
