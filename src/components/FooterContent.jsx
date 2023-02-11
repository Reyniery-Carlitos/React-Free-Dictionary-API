export const FooterContent = ({ text, title }) => {
  return (
    <footer className='flex gap-x-4 w-full'>
      <h3 className='text-gray-600'> {title} </h3>
      {title === 'Source'
        ? (
          <h4 className='text-violet-900'> <a href={text}> {text} </a> </h4>
          )
        : (
          <h4 className='text-violet-900'> {text} </h4>
          )}
    </footer>
  )
}
