import AntDesignLogo from '../../assets/images/antd-logo.svg'
import ReduxLogo from '../../assets/images/redux-logo.svg'
import OktaLogo from '../../assets/images/okta-logo.svg'
import JestLogo from '../../assets/images/jest-logo.svg'
import UtilityLogo from '../../assets/images/utility-logo.svg'

import { FEATURE_DETAIL } from './modal'

export const FEATURE_LIST: FEATURE_DETAIL[] = [
  {
    headerTitle: 'UI Component',
    headerColor: '#0D6CFF',
    icon: AntDesignLogo,
    title: 'Ant Design',
    description: '',
    link: 'https://ant.design/',
  },
  {
    headerTitle: 'State Management',
    headerColor: '#764ABC',
    icon: ReduxLogo,
    title: 'Redux',
    description: '',
    link: 'https://redux.js.org/',
  },
  {
    headerTitle: 'Authentication',
    headerColor: '#007DC1',
    icon: OktaLogo,
    title: 'Okta',
    description: '',
    link: 'https://www.okta.com/',
  },
  {
    headerTitle: 'Unit Test',
    headerColor: '#C63D14',
    icon: JestLogo,
    title: 'Jest',
    description: '',
    link: 'https://jestjs.io/',
  },
  {
    headerTitle: 'Utilities: Git Hooks',
    headerColor: '#979797',
    icon: UtilityLogo,
    title: 'Husky',
    description: '',
    link: 'https://github.com/typicode/husky',
  },
  {
    headerTitle: 'Utilities: File creation',
    headerColor: '#979797',
    icon: UtilityLogo,
    title: 'Plop',
    description: '',
    link: 'https://plopjs.com/',
  },
]
