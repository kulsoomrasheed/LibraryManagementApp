'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Addbook() {
    const [title,setname]=useState("")
    const [author , setauth]= useState("")
    const obj={title,author}
   
    const fetchData=()=>{
        axios.post("https://lib-a9dj.onrender.com/books",obj).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err.message);
        
        })
        
    }
    const handlepost = (e) => {
        e.preventDefault();
      
        const obj = { title, author };
      
        axios.post("https://lib-a9dj.onrender.com/books", obj)
          .then((res) => {
            console.log(res.data);
            alert("A new Book has been added")
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} color='purple.400'>
          Add Book 
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Book name</FormLabel>
          <Input
          onChange={(e)=>setname(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Author name</FormLabel>
          <Input
          onChange={(e)=>setauth(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
          />
        </FormControl>
        
      
        <Stack spacing={6}>
          <Button
          onClick={handlepost}
            bg={'purple.100'}
            color={'white'}
            _hover={{
              bg: 'purple.300',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}