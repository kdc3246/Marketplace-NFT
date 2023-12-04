import { Box, Flex, Heading, Link, Text, Avatar } from '@chakra-ui/react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import NextLink from 'next/link'

const Navbar = () => {
  const address = useAddress()
  return (
    <Box maxW={'1200px'} m={'auto'} py={'10px'} px={'40px'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading>Marketplace</Heading>
        </Link>
        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text fontSize={'2xl'} as="b">
              Buy
            </Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text fontSize={'2xl'} as="b">
              Sell
            </Text>
          </Link>
          <Link as={NextLink} href="/tokendrop" mx={2.5}>
            <Text fontSize="2xl" as="b">
              Token Drop
            </Text>
          </Link>
          <Link as={NextLink} href="/info" mx={2.5}>
            <Text fontSize="2xl" as="b">
              Info
            </Text>
          </Link>
        </Flex>
        <Flex direction={'row'} alignItems={'center'}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
export default Navbar