import { Container } from "./style";

import { ButtonText  } from '../ButtonText'
import { Button } from '../Button'
import {Logo} from '../Logo'

import { Spin as Hamburger } from 'hamburger-react'

import { AiOutlineSearch ,AiOutlinePlus } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { BsHexagonFill } from 'react-icons/bs'

import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useState,useEffect } from "react";
import { api } from "../../services/api";

export const HeaderAdmin = ({setPlates=() => {}}) => {
  const {signOut} = useAuth()

  const navigate = useNavigate()
  
  const [ search,setSearch ] = useState('')
  const [active, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)

  
  const handleOrders = () => {
    navigate('/order')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }

  const handleNewPlate = () => {
    navigate('/new')
  }


  const handleMenu = () => {
    setActive(!active)
  }

  useEffect(()=> {
    if(search.length > 0 && window.location.pathname === '/') {
      const fetchPlates = async () => {  
        const response = await api.get(`/plates?title=${search}`)
    
        setPlates(response.data)
      }
      fetchPlates()
    } else if(search.length == 0 ){
      const fetchPlates = async () => {
        const response = await api.get(`/plates`)

        setPlates(response.data)
      }
      fetchPlates()

    }
  },[search])

  return(
    <Container>      

      <nav className="navbar">

        

        <ul className={active? 'nav-menu active': 'nav-menu '}>
        <Logo/>
          <li className="nav-item">
            <ButtonText 
              className='new ' 
              title='Novo Prato'
              onClick={handleNewPlate}
              iconSize={20}
            />
          </li>
          <li className="nav-item">
            <div className='search '>
              <AiOutlineSearch 
                size={20} 
                color='#C4C4C4'
                />
              <input 
                type="text" 
                placeholder="Pratos e ingredientes" 
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>  
          </li>

          <li className="nav-item">
            <Button
              title='Pedidos'
              Icon={FaMoneyCheck}
              className={active? 'request ' : 'isDisable  request'}
              onClick={handleOrders}
            />
          </li>

          <li className="nav-item">
            <ButtonText 
                Icon={FiLogOut}
                iconSize={30}
                className='exit'
                onClick={signOut}
                style={{
                  color:'#C4C4C4'
                }}
              />
          </li>
        </ul>
        <button 
          className="menu" 
          type="button"
          onClick={handleMenu}
        >
          <Hamburger toggled={isOpen} toggle={setOpen}/>
        </button>
      </nav>


      





  






    </Container>
  )
}