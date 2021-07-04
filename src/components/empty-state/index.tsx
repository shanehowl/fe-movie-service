import { Empty } from 'antd'

//* Modal
import { ORCEmptyStateProps } from '../../modals/components/empty-state-modal'

//* Style
import './empty-state.scss'

const DEFAULT_DESCRIPTION = 'Oops,looks like our list of program is not ready yet.'
const ORCEmptyState = ({
  description = DEFAULT_DESCRIPTION,
  target = 'page',
}: ORCEmptyStateProps) => {
  return <Empty description={description} className={`ORCEmptyState ORCEmptyState--${target}`} />
}

export default ORCEmptyState
