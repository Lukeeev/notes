import reactLogo from './assets/react.svg'
import './App.css'
import Create from './components/Create'
import Grid from './components/Grid'

type Card = {
  title: string,
  img: string,
  text: string
}

let cards: Card[] = [
  { title: 'Card 1', img: 'src/assets/chibi-pok.png', text: 'This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 This is card 1 ' },
  { title: 'Card 2', img: 'src/assets/chibi-pok.png', text: 'This is card 2' },
  { title: 'Card 3', img: 'src/assets/chibi-pok.png', text: 'This is card 3' },
  { title: 'Card 4', img: 'src/assets/chibi-pok.png', text: 'This is card 4' },
];

function App() {
  return (
    <>
      <div>
        <div className='flex flex-row justify-center gap-5 m-2 '>
          <h1 className='text-2xl margin flex justify-center p-2'>The</h1>
          <h1 className='text-2xl margin flex justify-center p-2'>Notes</h1>
          <h1 className='text-2xl margin flex justify-center p-2'>App</h1>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
          <h2 className='font-medium'>Made with: </h2>
          <img src={reactLogo} alt="React" title='React'/>
          <img src="src/assets/typescript.png" alt="Typescript" title='Typescript' />
        </div>
      </div>
      <Grid cards={cards}/>
      <Create />
    </>
  )
}

export default App
