import Card from "./component/card"

function App() {
 
  let names = ['one','two','three'];

  let cardObj = {
    cardArr:[
      {
        "name" : "Rishal",
        "occupation" : "software ingineer",
        "image" : "https://media.gettyimages.com/id/107684365/photo/centurion-south-africa-sachin-tendulkar-of-india-celebrates-his-50th-test-century-during-day-4.jpg?s=612x612&w=gi&k=20&c=mUyl2nmiYQ1ru18LbR8xItz0tNBQPmeGKFG0FfHxTAU="
      },
      {
        "name" : "Ritu kumari",
        "occupation" : "home minister",
        "image" : "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
      },
      {
        "name" : "Tukulchi",
        "occupation" : "entertaning",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      }


    ]
  }
  

  return (
    <>
    <Card cardProps={cardObj.cardArr[0]}/>
    <Card cardProps={cardObj.cardArr[1]}/>
    <Card cardProps={cardObj.cardArr[2]}/>
    
    </>
  )
}

export default App
