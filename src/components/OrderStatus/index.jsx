import { Container } from "./style";

import { FaCircle } from 'react-icons/fa'
import { ButtonText } from "../ButtonText";
import { useNavigate } from "react-router-dom";



export const OrderStatus = ({status}) => {
  const navigate = useNavigate()

  const whatIsTheColor = () => {
    switch(status){
      case 'pending':
        return 'red'
      case 'readying':
        return 'yellow'
      case 'delivered':
        return 'green'
    }
  }

  const whatIsTheTitle = () => {
    switch(status){
      case 'pending':
        return 'Pendente'
      case 'readying':
        return 'Preparando'
      case 'delivered':
        return 'Entregue'
    }

    const handleback = () => {
      navigate(-1)
    }
  }

  return(
    <Container>
      <ButtonText
        title={"< Voltar"}
        onClick={handleback}
      />
      <FaCircle
        color={whatIsTheColor()}
        size={10}
      />
      {whatIsTheTitle()}
    </Container>
  )
}