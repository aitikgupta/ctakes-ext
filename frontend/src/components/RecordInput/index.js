import React from 'react'
import {
    Pane,
    Text,
    Heading,
    Label,
    Textarea,
    TextInput,
    InlineAlert,
    Button
} from 'evergreen-ui'

const Index = () => {
    return (
        <div>
            <Pane
                elevation={1}
                marginTop={88}
                marginLeft={43}
                height={448}
                width={992}
                paddingLeft={20}
                background="white"
                display="flex"
                flexDirection="column"
                border="default">
                <Heading size={800} marginTop="default">Submit a clinical record</Heading>
                <Pane
                    height={2}
                    width={904}
                    marginTop={8}
                    marginBottom={24}
                    background={"rgba(67, 90, 111, 0.3)"}></Pane>
                <Pane display="flex">
                    <Pane>
                        <Label htmlFor="textarea-2" marginBottom={4} display="block">
                            Patient summary
                        </Label>
                        <Textarea
                            width={594}
                            height={200}
                            id="textarea-2"
                            placeholder="Textarea placeholder..."/>
                    </Pane>
                    <Pane margin={16}>
                        <Pane marginBottom={16}>
                            <Label htmlFor="textarea-2" marginBottom={4} display="block">
                                Patient Name
                            </Label>
                            <TextInput name="text-input-name" placeholder="Text input placeholder..."/>
                        </Pane>
                        <Pane marginBottom={16}>
                            <Label htmlFor="textarea-2" marginBottom={4} display="block">
                                Patient Age
                            </Label>
                            <TextInput name="text-input-name" placeholder="Text input placeholder..."/>
                        </Pane>
                        <Pane marginBottom={16}>
                            <Label htmlFor="textarea-2" marginBottom={4} display="block">
                                Physicians Name
                            </Label>
                            <TextInput name="text-input-name" placeholder="Text input placeholder..."/>
                        </Pane>
                    </Pane>
                </Pane>
                <Pane>
                    <InlineAlert marginBottom={28} intent="none" marginBottom={16}>
                        We replace annotated text by a pseaudofield
                    </InlineAlert>

                <Button  appearance="primary">Submit Data</Button>
                </Pane>
            </Pane>

        </div>
    )
}

export default Index
