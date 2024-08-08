type CardProps = {
    title: string,
    img: string,
    text: string
}

export default function Card(props: CardProps) {

  return (
    <div className='rounded-lg w-52 h-80 overflow-y-scroll scroll border-2 border-spacing-2 bg-[#FFDE4D]'>
        <h1>{props.title}</h1>
        <img src={props.img}/>
        <p>{props.text}</p>
    </div>
  )
}
