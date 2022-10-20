import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a blockchain & web3 developer based in China!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yu Zhang
          </Heading>
          <p>Life Explorer ( Blockchain / Programming / Photography )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pseudoyu.webp"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Yu is a blockchain & golang developer based in China with a passion
          for building wonderful web3 products. He has a knack for various 
          technical stacks about blockchain, from designing and building ÐApp 
          to solving real-life problems with smart contracts. When not online,
          he loves writing blogs, hanging out with his camera and do video-editing.
          He publishes content about his life and work in his personal blog called
          &quot;
          <NextLink href="https://www.pseudoyu.com" passHref>
            <Link target="_blank">Pseudoyu</Link>
          </NextLink>
          &quot; which has more than 10k page views per month.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Hangzhou, China.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Established Wuhan Geek Education Technology co., LTD (武漢极课教育科技有限公司).
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Bachelor&apos;s Program in the Wuhan University of Technology (WHUT, 武漢理工大學).
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Master&apos;s Program in the University of Hong Kong (HKU, 香港大學).
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Worked as blockchain developer at Ziggurat.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="https://www.instagram.com/pseudo.yu/" target="_blank">
            Photography
          </Link>, 
          <Link href="https://www.douban.com/people/pseudo-yu/" target="_blank">
            Reading
          </Link>,
          <Link href="https://www.pseudoyu.com/zh/category/ideas/" target="_blank">
            Thinking
          </Link>,
          <Link href="https://www.pseudoyu.com" target="_blank">
            Writing
          </Link>,
          <Link href="https://space.bilibili.com/5374948" target="_blank">
          Video-editing
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/pseudoyu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @pseudoyu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/pseudo_yu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @pseudo_yu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/pseudo.yu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @pseudo.yu
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/videos" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular videos
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
