import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { server } from '../index'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'

// & x_cg_demo_api_key=CG-Pdjj4ZpdMBD5ymRew4dpU3JS

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = 
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}&x_cg_demo_api_key=CG-Pdjj4ZpdMBD5ymRew4dpU3JS`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }

    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"error while fetching coins"} />

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ):(
      <>

        <RadioGroup variant={"outline"} value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinCard
              id={i.id}
              key={i.id}
              name={i.name}
              price={i.current_price}
              image={i.image}
              symbol={i.symbol}
              currencySymbol={currencySymbol}
            />
          ))}
        </HStack>

        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {btns.map((item,index) => (
            <Button
              key={index}
              // bgColor={"blackAlpha.900"}
              // color={"white"}
              onClick={() => changePage(index+1)}  
            >
              {index+1}
            </Button>
          ))}
        </HStack>
      </>
      )}
      
    </Container>
  );
};

export default Coins;