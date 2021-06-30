import _ from 'lodash'
import { FC, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Row, Col, Typography, Button, Space, Table } from 'antd'
import { useStateWithPaths } from '../../../../utilities/hooks/useConnect'
import { deleteBook, retrieveAvailableBooks } from '../../../../redux/actions/action_crud_page'

import './record-listing.less'
import { TABLE_COLS_CONFIG } from '../../config'
import { TableCols } from '../../../../modals/crud'

/**
 *
 * RecordListing
 *
 */
const RecordListing: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation<{ pathname: string }>()
  const { Title } = Typography
  const [booksRecord = []] = useStateWithPaths([`crudPageReducer.booksRecord`])

  const onApiRetrieve = useCallback(() => {
    dispatch(retrieveAvailableBooks())
  }, [dispatch])

  const onAddEntry = useCallback(() => {
    history.push({
      pathname: `${pathname}/entry`,
    })
  }, [history, pathname])

  const onEdit = useCallback(
    (id: string) => {
      history.push({
        pathname: `${pathname}/entry`,
        search: `?id=${id}`,
      })
    },
    [history, pathname]
  )

  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteBook(id))
    },
    [dispatch]
  )

  const columns = useMemo(() => {
    const recordColumns = _.map(TABLE_COLS_CONFIG, (col: TableCols) => {
      return {
        title: col.title,
        dataIndex: col.accessor,
        key: col.accessor,
      }
    })
    const actionColumn = {
      title: '',
      key: 'action',
      render: ({ id = '' }) => (
        <Space align="end">
          <Button type="default" onClick={() => onEdit(id)}>
            Edit
          </Button>
          <Button type="default" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Space>
      ),
    }
    return [...recordColumns, actionColumn]
  }, [])
  return (
    <>
      <Row>
        <Col className="record-listing" span={24}>
          <Row align="middle" justify="start" gutter={[16, 16]}>
            <Col span={24}>
              <Title className="record-listing__title" level={2}>
                Records
              </Title>
            </Col>
          </Row>
          <Row align="middle" justify="start" gutter={[0, 18]}>
            <Col span={24} className="record-listing__btn-group">
              <Space size={16} className="record-listing__spacer">
                <Button type="primary" onClick={onAddEntry}>
                  Add entry
                </Button>
                <Button type="default" onClick={onApiRetrieve}>
                  Retrieve entry from API
                </Button>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="record-listing__table">
              <Table columns={columns} dataSource={booksRecord} rowKey="id" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default RecordListing
