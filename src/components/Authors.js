import { useState } from "react"
import { useMutation } from "@apollo/client"
import { EDIT_AUTHOR_YEAR } from "./queries"

const Authors = (props) => {    
    const [ name, setName ] = useState('')
    const [ born, setYear ] = useState(1000)
    const [ changeYear ] = useMutation(EDIT_AUTHOR_YEAR)

    if (!props.show) { return null }

    const submit = (event) => {
      event.preventDefault()
      const setBornTo = born
      changeYear({ variables: { name, setBornTo } })
      setName('')
      setYear('')
    }

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
          <form onSubmit={submit}>
            <div>
              Name: <input value={name} onChange={({ target }) => setName(target.value)} />
            </div>
            <div>
              Born: <input value={Number(born)} 
                           onChange={({ target }) => setYear(Number(target.value))} />
            </div>
            <button type="submit">update author</button>
          </form>

          <form>
            <select onChange={({ target }) => setName(target.value)}>
              {props.authors.map(a => <option key={a.name}>{a.name}</option>)}
            </select>
          </form>
        </div>
      )
    }
  }

export default Authors
