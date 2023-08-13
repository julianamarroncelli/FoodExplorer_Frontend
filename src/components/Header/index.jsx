import { Container } from "./style";

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'
import {Logo} from '../Logo'

import { AiOutlineSearch , AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMoneyCheck } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { BsHexagonFill } from 'react-icons/bs'
import {TfiReceipt} from 'react-icons/tfi'

import { Spin as Hamburger } from 'hamburger-react'


import { useNavigate} from "react-router-dom";
import { useAuth } from '../../hooks/auth.jsx'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Header = ({ handleShowFavorites, allQuantity, setPlates , favoriteTitle='Favoritos'}) => {
  const navigate = useNavigate()

  const {signOut} = useAuth()
  const [ search,setSearch ] = useState('')

  const [active, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  const handleOrders = () => {
    navigate('/orders')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleShopCart = () => {
    navigate('/payment')
  }



  useEffect(()=> {
    if(search.length > 0 && window.location.pathname == '/') {
      const fetchPlates = async () => {  
        const response = await api.get(`/plates?title=${search}`)
    
        setPlates(response.data)
      }
      fetchPlates()
    } else if(search.length == 0 ){
      if(setPlates){
      const fetchPlates = async () => {
        const response = await api.get(`/plates`)

        setPlates(response.data)
      }
      fetchPlates()
      }
    }
  },[search])


  return(
    <Container>      


      <nav className="navbar">

        <ul className={isOpen? 'nav-menu active': 'nav-menu '}>
         <Logo/>
          <li className="nav-item">
            <ButtonText 
              className='favorites'
              title={favoriteTitle}
              onClick={handleShowFavorites}
              Icon={AiOutlineHeart}
              iconSize={20}
            />
            
          </li>
          <li className="nav-item">
            <div className="search">
              <AiOutlineSearch 
                size={25} 
                color='#C4C4C4'
                />
              <input 
                type="text" 
                placeholder="Pratos ou ingredientes" 
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
          </li>
          <li className="nav-item">
              <Button
                title='Pedidos'
                iconSize={30}
                Icon={TfiReceipt}
                className='request'
                onClick={handleOrders}
                style={{
                  color:'#C4C4C4'
                }}
              />

                      
          </li>
          <li className="nav-item">

            <ButtonText  
              Icon={FaMoneyCheck}
              iconSize={30}
              title={allQuantity}
              className='shop-cart'
              onClick={handleShopCart}
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
          >
            <Hamburger toggled={isOpen} toggle={setOpen}/>
          </button>


      </nav>

    </Container>
  )
}