import './App.css'
const { Player } = await import(`./${import.meta.env.VITE_STEP}/index.tsx`)

function App() {
  return (
    <>
      <h1>tutorial-shaka-player {import.meta.env.VITE_STEP}</h1>
      <div className="player">
        <Player />
      </div>
    </>
  )
}

export default App
