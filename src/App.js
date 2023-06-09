import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { ALL_AUTHORS, ALL_BOOKS } from './components/queries'

const App = () => {
  const [page, setPage] = useState('')

  let mikaData = ALL_AUTHORS
  if (page === 'authors') { mikaData = ALL_AUTHORS }
  else if (page === 'books') { mikaData = ALL_BOOKS }
  const result = useQuery(mikaData, {
    pollInterval: 2000
  })

  if (result.loading)  { return <div>loading...</div> }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} authors = {result.data.allAuthors} />
      <Books show={page === 'books'} books = {result.data.allBooks} />
      <NewBook show={page === 'add'} />

    </div>
  )
}

export default App
