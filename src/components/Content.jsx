import { ContentHeader } from './ContentHeader'
import { ContentMeaning } from './ContentMeaning'
import { FooterContent } from './FooterContent'

export const Content = ({ results }) => {
  const { word, phonetic, meanings, sourceUrls } = results

  return (
    <main className='flex flex-col justify-center items-center w-4/5 my-7 gap-y-6'>
      <ContentHeader word={word} phonetic={phonetic} />
      {
        meanings.map((item, index) => (
          <ContentMeaning key={index} partOfSpeech={item.partOfSpeech} definitions={item.definitions} synonyms={item.synonyms} />
        ))
      }
      {
        sourceUrls.map((item, index) => (
          <FooterContent key={'souceUrls' + index} text={item} title='Source' />
        ))
      }
    </main>
  )
}
