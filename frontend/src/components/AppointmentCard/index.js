import React from 'react'
import {
    Pane,
    Text,
    Heading,
    Label,
    Textarea,
    TextInput,
    InlineAlert,
    Button,
    Switch
} from 'evergreen-ui'

import Card from './cards/index'

const Index = () => {
    return (
        <Pane
            display="flex"
            width={992}
            justifyContent="space-between"
            margin={24}
            marginLeft={43}>
            <Pane>

                <Pane>
                    <Card/>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Index
