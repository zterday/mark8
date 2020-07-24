import React from 'react'
import CSVReader from 'react-csv-reader'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'


const Upload = ({ handleUpload }) => {

    const handleForce = (data) => handleUpload(data);

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    return (

        <div>

            <Segment placeholder>
                <Header icon>
                    <Icon name='pdf file outline' />
     Choose your an input method
    </Header>
                <Button primary><CSVReader
                    cssClass="react-csv-input"
                    onFileLoaded={handleForce}
                    parserOptions={papaparseOptions}
                /></Button>
            </Segment>
        </div>

    )

}

export default Upload