import {useState} from 'react'
import {v4 as uuId} from 'uuid'

import {
  MainContainer,
  InnerContainer,
  Heading,
  Input,
  TextArea,
  Button,
  Container,
  Image,
  Head,
  Para,
  Container1,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [NotesList, updateList] = useState([])
  const [InputItem, onchangeInput] = useState('')
  const [TextareaItem, onchangeTextarea] = useState('')

  const changeInput = event => {
    onchangeInput(event.target.value)
  }

  const changeTextarea = event => {
    onchangeTextarea(event.target.value)
  }

  const AddNote = event => {
    event.preventDefault()
    const UpdateList = {
      id: uuId(),
      title: InputItem,
      note: TextareaItem,
    }

    updateList(prevState => [...prevState, UpdateList])
    onchangeInput('')
    onchangeTextarea('')
  }

  const NoteLength = NotesList.length
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <InnerContainer onSubmit={AddNote}>
        <Input
          type="text"
          placeholder="Title"
          onChange={changeInput}
          value={InputItem}
        />
        <TextArea
          rows="30"
          cols="40"
          placeholder="Take a Note..."
          onChange={changeTextarea}
          value={TextareaItem}
        />
        <Button type="submit">Add</Button>
      </InnerContainer>

      {NoteLength === 0 ? (
        <Container1>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Head>No Notes Yet</Head>
          <Para>Notes you add will appear here</Para>
        </Container1>
      ) : (
        <Container>
          {NotesList.map(each => (
            <NoteItem listItems={each} key={each.id} />
          ))}
        </Container>
      )}
    </MainContainer>
  )
}
export default Notes
