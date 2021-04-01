import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import "./style.css"
import RecordInput from '../components/RecordInput/index'
import Sidebar from '../components/sidebar/index'
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
const Dashboard = () => {
  return (
    <Container className="container__bg">
      <Pane
       display="flex"
      >
      <Sidebar/>
      <RecordInput />
      </Pane>
    </Container>
  )
}

export default Dashboard
