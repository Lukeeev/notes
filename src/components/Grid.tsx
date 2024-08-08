import Card from './Card'

type CardType = {
    title: string;
    img: string;
    text: string;
};

type GridProps = {
    cards: CardType[];
};

export default function Grid({cards}: GridProps) {

  return (
    <div className='m-5 h-80 grid gap-4 grid-flow grid-cols-4 bg-[#FFB22C]'>
        { cards.map((card, index) => (
            <Card key={index} title={card.title} img={card.img} text={card.text} />
        ))}
    </div>
  )
}
