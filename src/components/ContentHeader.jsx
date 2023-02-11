export const ContentHeader = ({ word, phonetic }) => {
  return (
    <header className='flex justify-between items-center w-full'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='text-5xl'> {word} </h1>
        <h2 className='text-xl'> {phonetic} </h2>
      </div>

      {/* <div>
        <audio src='https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'> </audio>
      </div> */}
    </header>
  )
}
