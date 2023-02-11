import { useEffect, useState } from 'react'
import { Content } from './components/Content'
import { InputSearch } from './components/InputSearch'

export const App = () => {
  const [url, setUrl] = useState('https://api.dictionaryapi.dev/api/v2/entries/en/react')
  const [data, setData] = useState({ results: [], loading: true })

  const changeUrl = (word) => {
    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData({
          results: data,
          loading: false
        })
      })
  }, [url])

  const { results } = !!data && data

  return (
    <>
      {/* <button className='bg-sky-600  h-10 w-40 text-white rounded rounded-lg'> En / Es </button> */}
      <InputSearch changeUrl={changeUrl} />
      {
results.length >= 1
  ? (
      results.map((item, index) => (
        <Content key={index * 100} results={item} />
      ))
    )
  : (
    <div className='mt-5'>
      <h2> No data found </h2>
    </div>
    )
      }
    </>
  )
}
