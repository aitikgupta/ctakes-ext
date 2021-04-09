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
    Switch,
    Avatar
} from 'evergreen-ui'

const Index = () => {
    return (
        <Pane
            elevation={1}
            marginTop={16}
            width={518}
            padding={20}
            background="white"
            display="flex"
            flexDirection="column"
            border="default">
            <Heading size={800}>Next Appointment</Heading>
            <Pane
                height={2}
                width={402}
                marginTop={8}
                marginBottom={24}
                background={"rgba(67, 90, 111, 0.3)"}></Pane>
            <Pane
                size={400}
                marginTop="8px"
                marginBottom="16px"
                display="flex"
                flexDirection="row"
                width={140}
                justifyContent="space-around"
                alignItems="center">
                <Avatar isSolid name="Jeroen Ransijn" size={40}/>
                <Pane>
                    <Heading size={400} marginTop="8px">Dr. John Doe</Heading>
                    <Text size={400} marginTop="8px">Psychologist</Text>
                </Pane>
            </Pane >
            <Pane
                display="flex"
                flexDirection="row"
                width={308}
                marginLeft={8}
                justifyContent="space-between">
                <Pane display="flex" flexDirection="column" justifyContent="space-around">
                    <Heading size={600} marginTop="8px">Date</Heading>
                    <Heading size={500} color="#1070CA">26 May 2021</Heading>
                </Pane>
                <Pane display="flex" flexDirection="column" justifyContent="space-around">
                    <Heading size={600} marginTop="8px">Time</Heading>

                    <Heading size={500} color="#1070CA">9:30am - 10:30am</Heading>
                </Pane>
            </Pane>

        </Pane>
    )
}

export default Index
