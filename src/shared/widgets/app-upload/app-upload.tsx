import { InboxOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import type { FC } from 'react'

type TProps = {}

const AppUpload: FC<TProps> = () => {
  return (
    <Upload.Dragger
      name='file'
      multiple={true}
      style={{ width: '500px', height: '450px' }}
    >
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>
        Нажмите или перетащите файл в эту область, чтобы загрузить
      </p>
    </Upload.Dragger>
  )
}

export default AppUpload
