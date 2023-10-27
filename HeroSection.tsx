'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg='#092147'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={10} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            color={'#8e6201'} // Set the text color to #D1A152
            fontWeight={'bold'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'white',
              zIndex: -1,
              borderRadius: '50%', // Add a border-radius for a bubble-like effect
              transform: 'scale(1.2)', // Scale the reflection to make it look like a bubble
              opacity: 0.5, // Adjust opacity to control the reflection's visibility
            }}>
            FINTECH @ GT
          </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          Welcome to Fintech @ Georgia Tech, GT's Premier finance + technology association.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'lg'}
              rounded={'full'}
              fontWeight={500}
              color={'white'}
              bg={'#7A7DD7'}
              href={'#'}
              _hover={{
                bg: '#9DA0ED',
              }}>
              Sign Up
            </Button>
            <Button 
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'lg'}
            fontWeight={500}
            rounded={'full'}
            color={'white'}
            bg={'#7A7DD7'}
            _hover={{
                bg: '#9DA0ED',
              }}
            >Sign In</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://processer.media/wp-content/uploads/2021/07/fintech2-2.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}