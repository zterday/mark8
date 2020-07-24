import React, { useState } from 'react'

import List from '../component/list'
import Upload from '../component/upload'
import { Container } from 'semantic-ui-react'
const UploadList = () => {

const [list, setList] = useState()

    const handleUpload = (data) => {
        setList(data)
    }

    console.log({ list})

    return (
    <Container fluid>
        <Upload handleUpload={handleUpload}/>
        <List data={list}/>
    </Container>

    )
}

export default UploadList