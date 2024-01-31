import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Flex>
        <Link to={"/login"} >Login</Link>
        <Link to={"/"}>Signup</Link>
        <Link to={"/books"}>Books</Link>
    </Flex>
  )
}

export default Nav