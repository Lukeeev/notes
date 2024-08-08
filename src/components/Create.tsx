import Card from "./Card"
//  TODO:
//    - on click create a new Card
//    - card will be editable, will have fields for title, subtitle, text, image

export default function Create() {

  function createNote() {
    return <Card title={"test"} img={""} text={"test"}/>
  }


  return (
    <button onClick={createNote} className='fixed bottom-0 right-0 m-5 w-20 h-20 bg-[#FF4C4C] text-white rounded-lg text-3xl'>
      <p>+</p>
    </button>
  )
}
