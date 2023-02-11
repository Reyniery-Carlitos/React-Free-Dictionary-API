import { useState } from 'react'

export const InputSearch = ({ changeUrl }) => {
  const [word, setWord] = useState('')

  const handleInputChange = (e) => {
    setWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (word.trim().length > 2) {
      changeUrl(word)
      setWord('')
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center w-4/5'>
      <input
        type='text'
        value={word}
        className='w-full h-12 p-2 outline-none bg-slate-50 shadow'
        placeholder='Search'
        onChange={handleInputChange}
      />
    </form>
  )
}
