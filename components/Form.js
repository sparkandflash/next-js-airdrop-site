import React, { useState } from 'react';

import { useToasts } from "react-toast-notifications";
import Popup from "reactjs-popup";

import {
  FormControl,
  FormLabel,

  Input,
  Button,
  Box,
  Center,
  Badge,
  Text
} from "@chakra-ui/react";

function WalForm(props) {
  const { addToast } = useToasts();

  const [hash, setHash] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const registerUser = async event => {
    event.preventDefault()

    try {
      const res = await fetch(
        '/api/walletcheck',
        {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      ).then(res => res.json())
        .then(data => {
          if (!data.bal)
            transfer(event),
              setLoading(true);
          else {
            addToast("you have already claimed this NFT", { appearance: "warning" });
            setLoading(false);
          }

        })
    }
    catch (ex) {
      console.log(ex)
    }
    //if set contains is false, excute below code


  };
  async function transfer(event) {
    event.preventDefault()
    try {
      const res = await fetch(
        '/api/transfer',
        {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      ).then(res => res.json())
        .then(data => {
          setHash(data.hash);
          setDisabled(false);
          setLoading(false);
          addToast("Success!", { appearance: "success" });
        })
    }
    catch (ex) {
      console.log(ex)
    }

  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>


      <Box h="300px" w="300px" >

        <form onSubmit={registerUser}>


          <FormControl id="wallet" isRequired>
            <FormLabel><Text fontSize="2xl">Enter your wallet address:</Text></FormLabel>
            <Input size="lg" variant="outline" placeholder="0x...." id="name" name="name" type="text" autoComplete="name" />
          </FormControl>
          <Center>
            <Button size="lg" isLoading={loading} type="submit" colorScheme="teal" variant="solid"  >submit</Button>
          </Center>
        </form>

        <Center>
          <Popup trigger={<Button size="lg" disabled={disabled}>get transactionHash</Button>} position=" center">
            <div><Text fontSize="l" fontWeight="bold"><Badge fontSize="em" >{hash}</Badge></Text></div>
          </Popup>
        </Center>
      </Box>





    </div>
  )
}
export default WalForm