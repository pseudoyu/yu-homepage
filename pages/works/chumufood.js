import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
// import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Chumu Food">
    <Container>
      <Title>
        Chumu Food<Badge>2020</Badge>
      </Title>
      <P>WeChat Mini-Program for food receipts</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WeChat Mini-Program</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>wxml, wxss, javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/pseudoyu/chumu-food">
            Chumu Food <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/YLdHAggLBCw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_01.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_02.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_03.png" alt="STYLY" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
