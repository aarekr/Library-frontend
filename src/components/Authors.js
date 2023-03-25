const Authors = (props) => {
    console.log("Authors.js authors:", props.authors)
    if (!props.show) {
      console.log("!props.show")
      return null
    }
    if (props.authors) {
      return (
        <div>
        <h2>authors</h2>
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
      </div>
      )
    }
  }

export default Authors
