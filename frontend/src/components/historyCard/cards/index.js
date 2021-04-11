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
            <Heading size={600}>Emergency Report</Heading>
            <Text size={400} marginTop="8px">
            In July 93 a Thai fourteen-year-old female Ms. Owl age very small was admitted to the emergency room of the Ramathibodi‟sHospital with suspicion of Multiple sclerosis treated by Dr Doge . Two months before she had presented with horizontal diplopia, diffuse headache and dorsal neck pain.The result of an eye examination at Chumpon‟s Hospital was normal
            </Text>
            <Heading size={300} marginTop={8} color="blue">26 May 2021</Heading>

        </Pane>
    )
}

export default Index
