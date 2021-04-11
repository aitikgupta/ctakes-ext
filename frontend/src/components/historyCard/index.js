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

import Appointment from '../AppointmentCard/index'

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
                <Heading size={800} marginTop="default">Medical Record History</Heading>
                <Text size={400} marginTop="8px">Last two records</Text>

                <Pane>
                    <Card/>
                    <Card/>
                </Pane>

            </Pane>
            <Pane>
                {/* <Heading size={800} marginTop="default">Next Appointment</Heading> */}
                <Appointment marginTop="default"/>
            </Pane>
        </Pane>
    )
}

export default Index
