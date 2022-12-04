import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbYuTools from '../public/images/works/project_yu_tools.png'
import thumbUright from '../public/images/works/project_uright.png'
import thumbXDeepFM from '../public/images/works/project_xdeepfm.png'
import thumbChumuFood from '../public/images/works/project_chumu_food.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Box borderRadius="lg" mb={2} p={2}></Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="uright" thumbnail={thumbUright} title="Uright">
            A Music Copyright Protection ÐApp
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="chumufood"
            thumbnail={thumbChumuFood}
            title="Chumu-Food"
          >
            WeChat Mini-Program for food receipts
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="xdeepfm" thumbnail={thumbXDeepFM} title="xDeepFM">
            eXtreme Deep Factorization Machine
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Others
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="yutools" thumbnail={thumbYuTools} title="Yu Tools">
            My personal Toolbox(including hardwares, macOS, iOS apps)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
