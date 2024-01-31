import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from '@chakra-ui/react';
import Nav from '../Components/Nav';

const Home = () => {
  return (
    <Box width={'80%'} justifyContent={'center'} margin={'auto'} my={5}>
      <Heading color={'purple.600'} mb={10}>
        Library Management App
      </Heading>
      <Table justifyContent={'center'} textAlign={'center'} alignContent={'center'} margin={"auto"} alignItems={"center"} variant='striped' colorScheme='purple'>
        <Thead>
          <Tr>
            <Th>Book Name</Th>
            <Th>Author</Th>
            <Th>Date</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody justifyContent={'center'} textAlign={'center'} alignContent={'center'} margin={"auto"} alignItems={"center"}>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td >25.4</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td >25.4</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td >30.48</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td >0.91444</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td >0.91444</Td>
            <Td>inches</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Home;
