import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { FC, useCallback, useMemo } from 'react'
import { Route, Switch, useLocation } from 'react-router'
import { reverseSliceByCharacter } from '../../../../utilities/common'
import { useStateWithPaths } from '../../../../utilities/hooks/useConnect'
import { createBook, updateBook } from '../../../../redux/actions/action_crud_page'
import './record-entry.less'

const EntryForm: FC<{ isEdit: boolean; id: string }> = ({ isEdit = false, id = '' }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [booksRecord = []] = useStateWithPaths([`crudPageReducer.booksRecord`])
  const onSubmit = useCallback(
    (value: any) => {
      const valueWithID = { ...value, id: id || _.uniqueId('A') }
      if (isEdit) {
        return dispatch(updateBook(valueWithID))
      }
      return dispatch(createBook(valueWithID))
    },
    [dispatch, id, isEdit]
  )
  const record = useMemo(() => {
    if (!isEdit) return null
    return _.find(booksRecord, { id })
  }, [isEdit, booksRecord, id])

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit} initialValues={{ ...record }}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input book name!' }]}
      >
        <Input placeholder="John Lo" />
      </Form.Item>
      <Form.Item
        label="No of items"
        name="noOfItems"
        rules={[{ required: true, message: 'Please input book quantity. Minimum 1!' }]}
      >
        <Input placeholder="10" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
/**
 *
 * RecordEntry
 *
 */
const RecordEntry: FC = () => {
  const { search } = useLocation<{ search: String }>()
  const paramValue = reverseSliceByCharacter(search, '=')
  const isEditEntry = !!paramValue
  return (
    <>
      <div>{isEditEntry ? `Edit ${paramValue}` : `New Entry`}</div>
      <Switch>
        <Route
          path="/crud/entry"
          component={() => <EntryForm isEdit={isEditEntry} id={paramValue} />}
        />
      </Switch>
    </>
  )
}

export default RecordEntry
