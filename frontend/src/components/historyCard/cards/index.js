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
            <Heading size={600}>Title Report</Heading>
            <Text size={400} marginTop="8px">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchan
            </Text>
            <Heading size={300} marginTop={8} color="blue">26 May 2021</Heading>

        </Pane>
    )
}

export default Index
