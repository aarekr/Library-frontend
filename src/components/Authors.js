import { useState } from "react"
import { UPDATE_AUTHOR_BORN } from "./queries"

const Authors = (props) => {
    console.log("Authors.js authors:", props.authors)
    
    const [ newName, changeName ] = useState('')
    const [ newYear, changeYear ] = useState('')
    const [ paivitaVuosi ] = useState(UPDATE_AUTHOR_BORN)

    if (!props.show) { return null }

    const updateAuthor = (event) => {
      event.preventDefault()
      console.log("Päivitetään author:")
      const updatedAuthor = {
        name: newName,
        born: Number(newYear),
        bookCount: 0
      }
      console.log("--->", updatedAuthor)
      paivitaVuosi({ variables: {newName, newYear}})
      changeName('')
      changeYear('')
    }
    const handleNameChange = (event) => { changeName(event.target.value) }
    const handleYearChange = (event) => { changeYear(event.target.value) }

    if (props.authors) {
      return (
        <div>
          <h2>Authors</h2>
          <table>
            <tbody>
              <tr>
                <th>name</th>
                <th>born</th>
                <th>books</th>
              </tr>
              {props.authors.map((a) => (
                <tr key={a.name}>
                  <td>{a.name}</td>
                  <td>{a.born}</td>
                  <td>{a.bookCount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Set birthyear</h3>
          <form onSubmit={updateAuthor}>
            Name: <input value={newName} onChange={handleNameChange} /> <br />
            Born: <input value={newYear} onChange={handleYearChange} /> <br />
            <button type="submit">update author</button>
          </form>
        </div>
      )
    }
  }

export default Authors
