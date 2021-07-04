import _ from 'lodash'
import { Layout } from 'antd'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Landing from '../landing'
import Listing from '../listing'
import NavigationHeader from '../../components/navigation-header'
import ORCEmptyState from '../../components/empty-state'

import { retrieveProgramList } from '../../redux/actions/action_program_list'
//* Modal
import { MenuItem } from '../../modals/components/navigation-header-modal'
import { ROUTES_NAMING } from '../../constants/routes'
import { PROGRAM_TYPE } from '../../constants/programType'
import './home.scss'
import { RootState } from '../../redux/reducers'

const Home: FC = () => {
  //* Constants
  const { Header, Content } = Layout
  const ROUTE_MENU: MenuItem[] = [
    {
      key: PROGRAM_TYPE.movie,
      value: _.capitalize(PROGRAM_TYPE.movie),
    },
    {
      key: PROGRAM_TYPE.series,
      value: _.capitalize(PROGRAM_TYPE.series),
    },
  ]

  //* Redux
  const dispatch = useDispatch()
  const programs = useSelector((state: RootState) => state.programListReducer.programs)

  //* Effect
  useEffect(() => {
    dispatch(retrieveProgramList())
  }, [])
  return (
    <Layout>
      <Header className="layout__header">
        <NavigationHeader
          title="ORC Program"
          routeMenuItem={!_.isEmpty(programs) ? ROUTE_MENU : []}
        />
      </Header>
      <Content className="layout__content">
        <Switch>
          <Route
            exact
            path={ROUTES_NAMING.landing}
            component={() => (!_.isEmpty(programs) ? <Landing /> : <ORCEmptyState />)}
          />
          <Route path={ROUTES_NAMING.movie} component={Listing} />
          <Route path={ROUTES_NAMING.series} component={Listing} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Home
