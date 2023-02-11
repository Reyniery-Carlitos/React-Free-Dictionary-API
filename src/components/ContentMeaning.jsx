import { FooterContent } from './FooterContent'
export const ContentMeaning = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <section className='flex justify-center flex-col gap-5 w-full'>
      <h2> <b> {partOfSpeech} </b> </h2>
      <h3 className='text-gray-600'> Meaning </h3>
      <ul className='flex flex-col gap-4'>
        {
        definitions.map((item, index) => (
          <li key={partOfSpeech + index} className='list-disc ml-10'> {item.definition}</li>
        ))
      }
      </ul>
      {
        synonyms.map((item, index) => (
          <FooterContent key={partOfSpeech + synonyms + index} text={item} title='Synonyms' />
        ))
      }
    </section>
  )
}
