import React, { useEffect, useState } from 'react';
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
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ... (previous imports)

const Home = () => {
  const [data, setData] = useState([]);
  const [showRecentBooks, setShowRecentBooks] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [showRecentBooks, sortOrder]);

  const fetchData = () => {
    axios.get("https://lib-a9dj.onrender.com/books/").then((res) => {
      console.log(res.data);

      let filteredData = res.data.doctors;

      if (showRecentBooks) {
        // Filter books created within the last 10 minutes
        const tenMinutesAgo = new Date(new Date().getTime() - 10 * 60 * 1000).toISOString();
        filteredData = filteredData.filter(book => new Date(book.createdAt).getTime() >= new Date(tenMinutesAgo).getTime());
      }

      // Sort data based on createdAt
      filteredData.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });

      setData(filteredData);
    }).catch((err) => {
      console.log(err.message);
    });
  }

  return (
    <Box width={'80%'} justifyContent={'center'} margin={'auto'} my={5}>
      <Heading color={'purple.600'} mb={10}>
        Library Management App
      </Heading>

      <Button
        bgColor="purple.100"
        marginX={5}
        onClick={() => setShowRecentBooks(!showRecentBooks)}
        mb={4}
      >
        {showRecentBooks ? "Show All Books" : "Show Books Created Last 10 Minutes"}
        
      </Button>

      <Button
        bgColor="purple.100"
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        mb={4}
      >
        {`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
      </Button>

      <Button
      onClick={()=>      navigate('/addbook')}
        bgColor="purple.100"
        mb={4}         marginX={5}

      >Add Book
      </Button>

      <Table justifyContent={'center'} textAlign={'center'} alignContent={'center'} margin={"auto"} alignItems={"center"} variant='striped' colorScheme='purple'>
        <Thead>
          <Tr>
            <Th>Book Name</Th>
            <Th>Author</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody justifyContent={'center'} textAlign={'center'} alignContent={'center'} margin={"auto"} alignItems={"center"}>
          {data.map((el, i) => (
            <Tr key={i}>
              <Td>{el.title}</Td>
              <Td>{el.author}</Td>
              <Td>{new Date(el.createdAt).toLocaleString()}</Td>
              <Button>Delete</Button>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Home;
