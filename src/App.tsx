import './App.scss'
import { Link } from './components/Link'

function App() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/JaquesBoeno',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/jaques.vagner?igshid=OGQ5ZDc2ODk2ZA==',
    },
  ]
  return (
    <div className="PageContainer">
      <div className="Profile">
        <img src="https://github.com/JaquesBoeno.png" />
        <div className="LeftBox">
          <h1>Jaques Boeno</h1>
          <span>Developer in Go and Javascript</span>
        </div>
      </div>
      <div className="LinksWrapper">
        {links.map((item, key) => {
          return <Link key={key} name={item.name} url={item.url} />
        })}
      </div>
    </div>
  )
}

export default App
