import { Typography } from '@mui/material'
import { FirstName } from './components/FirstName/FirstName'
import cardinals from './assets/data.json';

function App() {

  return (
    <div style={{ paddingInline: "1rem" }}>
      <Typography variant="h1" component="h1" align="left">Konklave 2025</Typography>
      <Typography variant="h2" component="h2" align="left">Liste der beteiligten Kardinäle</Typography>
      {cardinals.map((cardinal, index) => (
        <FirstName key={index} name={cardinal.name} data={cardinal.data} />
      ))}
    </div>
  )
}

export default App
