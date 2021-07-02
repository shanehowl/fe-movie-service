import { Layout } from 'antd'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Landing from '../landing'
import Listing from '../listing'
import NavigationHeader from '../../components/navigation-header'

import { retrieveProgramList } from '../../redux/actions/action_program_list'

import './home.less'
import { ROUTES_NAMING } from '../../constants/routes'

const Home: FC = () => {
  //* Constants
  const { Header, Content } = Layout

  //* Redux
  const dispatch = useDispatch()

  //* Effect
  useEffect(() => {
    dispatch(retrieveProgramList())
  }, [])
  return (
    <Layout>
      <Header className="layout__header">
        <NavigationHeader title="ORC Program" />
      </Header>
      <Content className="layout__content">
        <Switch>
          <Route exact path={ROUTES_NAMING.landing} component={Landing} />
          <Route path={ROUTES_NAMING.movie} component={Listing} />
          <Route path={ROUTES_NAMING.series} component={Listing} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Home
