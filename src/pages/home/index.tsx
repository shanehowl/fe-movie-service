import { Layout } from 'antd'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Crud from '../crud'
import Landing from '../landing'
import Features from '../features'
import NavigationHeader from '../../components/navigation-header'

import { retrieveMovieList } from '../../redux/actions/action_movie_list'

import './home.less'

const Home: FC = () => {
  //* Constants
  const { Header, Content } = Layout

  //* Redux
  const dispatch = useDispatch()

  //* Effect
  useEffect(() => {
    dispatch(retrieveMovieList())
  }, [])
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
