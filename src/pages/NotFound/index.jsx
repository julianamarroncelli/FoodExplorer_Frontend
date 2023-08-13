import { Container } from "./style"

import { useNavigate } from "react-router"


import { ButtonText  } from "../../components/ButtonText"

export const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }
  return(
    <Container>
      <h2>Página não encontrada</h2>
      <ButtonText         
        iconSize={30}
        title=" Voltar para página principal"
        onClick={handleNavigate}
      />
    </Container>
  )
}