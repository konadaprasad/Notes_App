import {ListItem, Head, Para} from './styledComponents'

const NoteItem = props => {
  const {listItems} = props
  const {title, note} = listItems

  return (
    <ListItem>
      <Head>{title}</Head>
      <Para>{note}</Para>
    </ListItem>
  )
}
export default NoteItem
