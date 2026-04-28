import './App.css'
import skolverketMark from '../assets/Skolv_CMYK 2022.png'

const cfg = window.__MAINTENANCE_CONFIG__ || {}

const statusItems = [
  {
    label: 'Status',
    value: cfg.status || 'Planerat underhåll',
  },
  {
    label: 'Beräknad återkomst',
    value: cfg.returnDate || '04 maj',
  },
  {
    label: 'Vid frågor',
    value: cfg.contact || 'Skriv till Mattias Erixon eller Olle Wikström',
  },
]

function App() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card" aria-labelledby="maintenance-title">
        <div className="maintenance-strip" aria-hidden="true" />

        <div className="maintenance-header">
          <img
            className="maintenance-logo"
            src={skolverketMark}
            alt="Skolverket"
          />
          <p className="maintenance-kicker">{cfg.kicker || 'Tillfälligt avbrott'}</p>
        </div>

        <div className="maintenance-grid">
          <div className="maintenance-copy">
            <h1 id="maintenance-title">{cfg.title || 'Vi uppdaterar tjänsten just nu'}</h1>
            <p className="maintenance-intro">
              {cfg.intro || 'Vi genomför planerat underhåll för att förbättra stabilitet, säkerhet och tillgänglighet. Tjänsten är tillbaka så snart arbetet är klart.'}
            </p>
            <p className="maintenance-body">
              {cfg.body || 'Tack för din förståelse. Om du behöver hjälp under tiden, använd den ordinarie supportvägen för din verksamhet.'}
            </p>
          </div>

          <aside className="maintenance-panel" aria-label="Statusinformation">
            <dl className="status-list">
              {statusItems.map((item) => (
                <div key={item.label} className="status-item">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="maintenance-note">
              {cfg.note || 'Vi publicerar ingen ytterligare information på sidan medan arbetet pågår.'}
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App;
