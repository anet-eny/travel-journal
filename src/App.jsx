import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="content-container">
      <Navbar />
      {cards}
    </div>
  )
}