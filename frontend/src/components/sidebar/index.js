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
    Table,
    HomeIcon,
    FolderOpenIcon,
    CalendarIcon
} from 'evergreen-ui'
import './style.css'
const Index = () => {
    return (
        <div className="Side__container">
            <Table marginTop={56}>
                <Table.TextHeaderCell>
                    Dashboard
                </Table.TextHeaderCell>
                <Table.Body height={240}>
                    <Table.Row width={333}>
                        <Table.TextCell margin={8} background="#DBEAF7" padding={24}>
                            <HomeIcon width={24}/>
                            <Text margin={8} size={300} fontWeight={600}>Home</Text>
                        </Table.TextCell>
                    </Table.Row>
                    <Table.Row width={333}>
                        <Table.TextCell margin={8}  padding={24}>
                            <CalendarIcon width={24}/>
                            <Text margin={8} size={300} fontWeight={600}>Appointments</Text>
                        </Table.TextCell>
                    </Table.Row>
                    <Table.Row width={333}>
                        <Table.TextCell margin={8}  padding={24}>
                            <FolderOpenIcon width={24}/>
                            <Text margin={8} size={300} fontWeight={600}>Medical records</Text>
                        </Table.TextCell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Index
