import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Flex gap={5} fontSize={'xl'} justifyContent={'space-evenly'} color={'purple'}>
              <Link to={"/books"}>Books</Link>

        <Link to={"/login"} >Login</Link>
        <Link to={"/"}>Signup</Link>
    </Flex>
  )
}

export default Nav