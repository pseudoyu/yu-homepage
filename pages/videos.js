import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumb30MinuteStudyWithMe from '../public/images/contents/30_minutes_study_with_me.png'
import thumb45MinuteStudyWithMe from '../public/images/contents/45_minutes_study_with_me.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Box borderRadius="lg" mb={2} p={2}></Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="30 minutes study with me | HKU"
            thumbnail={thumb30MinuteStudyWithMe}
            href="https://www.bilibili.com/video/BV1a54y1s7xV/"
          />
          <GridItem
            title="45 minutes study with me | HKU"
            thumbnail={thumb45MinuteStudyWithMe}
            href="https://www.bilibili.com/video/BV1cZ4y1c7mt/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          /> */}
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          /> */}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
