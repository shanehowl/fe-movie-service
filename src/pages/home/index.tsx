import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import NavigationHeader from '../../components/navigation-header'
import Landing from '../landing'
import Features from '../features'
import Crud from '../crud'

import './home.less'

const Home: FC = () => {
  const { Header, Content } = Layout
  return (
    <Layout>
      <Header className="layout__header">
        <NavigationHeader title="R Base" />
      </Header>
      <Content className="layout__content">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/features" component={Features} />
          <Route path="/crud" component={Crud} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Home
