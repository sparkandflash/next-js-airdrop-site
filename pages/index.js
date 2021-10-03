import React, { useState, useEffect } from 'react';

import { Image, Flex, Box, Text, VStack, Divider, Container, Center } from "@chakra-ui/react"

import Giveaway from '../components/Form';


function Airdrop() {

    const [count, setCount] = useState(null)

    async function loadWalletDetails() {
        try {
            const res = await fetch('/api/nftdata').then(res => res.json()).then(data => {
                setCount(data.bal);
            })

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadWalletDetails();
    }, [])

    return (

        <section >
            <Box h="100%" >
                <Container flex="5" w="100% " h="170px" align="center" >
                    <ul>


                        <h2 className='responsive-headline' style={{ color: 'gray' }}> Live Giveaway!

                        </h2>
                        <h2 style={{ color: 'gray' }}>  <Text color="gray.500" isTruncated>Number of NFTs left : {count}</Text> </h2>
                        <div>
                            <h2>   <Text color="black" isTruncated> nft name</Text> </h2> 
                        </div>
                    </ul>
                </Container>

                <VStack

                    spacing={4}
                    align="stretch">



                    <div h="500px">
                        <Flex align="center">
                            <Container color="black" flex="2" h="100%" align="center" >
                                <Center>

                                    <Box boxSize="sm">
                                        <Image src="nft-image-link" alt="nft name" />
                                    </Box>


                                </Center>

                            </Container>
                        </Flex>
                    </div>


                    <Divider borderColor="gray.200" />
                    <Center>
                        <Container h="350px" w="100" >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                                {count == '0' ?

                                    'no more copies left to be claimed!'

                                    : <Giveaway />
                                }

                            </div>

                        </Container>
                    </Center>
                </VStack>
                
                
            </Box>
        </section>

    )
}
export default Airdrop
