import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { server } from '../index'


const Exchanges = () => {

  useEffect(() => {
    const fetchExchanges = async () => {
        // const {data}  = await axios.get(`${server}/exchanges?`);
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges?x_cg_demo_api_key=CG-Pdjj4ZpdMBD5ymRew4dpU3JS`);
        console.log(data);
        console.log("data");
    };
    fetchExchanges();
  }, []);
  
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges