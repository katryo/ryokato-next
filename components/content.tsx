import { Flex, Link, Heading } from '@chakra-ui/core'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'
import { FiPenTool } from 'react-icons/fi'
import React from 'react'

const Content = () => {
  return (
    <Flex justify="center" align="center" m="40px">
      <Flex flexDirection="column">
        <Heading as="h1" size="xl">
          Ryo Kato
        </Heading>
        <Flex flexDirection="row">
          <Link href="https://www.linkedin.com/in/ryo-kato-626068103/" mr="0.5rem" isExternal>
            <FaLinkedin size="3rem" />
          </Link>
          <Link href="https://github.com/katryo" mx="0.5rem" isExternal>
            <FaGithub size="3rem" />
          </Link>
          <Link href="https://twitter.com/katryo" mx="0.5rem" isExternal>
            <FaTwitter size="3rem" />
          </Link>
          <Link href="https://www.facebook.com/ryo.kato.75" mx="0.5rem" isExternal>
            <FaFacebook size="3rem" />
          </Link>
          <Link href="https://katryo.hatenablog.com/" ml="0.5rem" isExternal>
            <FiPenTool size="3rem" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Content
