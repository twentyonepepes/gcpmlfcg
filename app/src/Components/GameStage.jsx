import { Card } from './Card'
import {
  Button, Container, Grid, Typography
} from '@material-ui/core'

export function GameStage({
  card = {},
  options = [],
  selectedIndex,
  revealSolution,
  handleSelectOption,
  handleRefreshOptions = () => { }
}) {

  return (
    <>
      <Container maxWidth="lg">
        <Container maxWidth="sm">
          <Card {...card} obfuscated={!revealSolution} style={{ alignContent: "center" }} />
        </Container>
        <Grid container xs={12} spacing={12} gap={12}>
          {options.map((option, i) => {

            const { correct, name } = option
            const selected = selectedIndex === i

            const getBackgroundColor = () => {
              if (!revealSolution) return null
              if (correct && selected) return "green"
              if (correct && !selected) return "lightgreen"
              if (selected && !correct) return "red"
              return "gray"
            }

            return (
              <Grid item xs="4">
                <Button onClick={() => handleSelectOption(i)} variant="outlined" key={name} style={
                  {
                    width: "100%",
                    backgroundColor: getBackgroundColor(),
                    border: selected ? "2px solid black" : null
                  }}>
                  {option.name}
                </Button>
              </Grid>
            )

          })}
        </Grid>

      </Container>
      <Button onClick={handleRefreshOptions} variant="contained">
        Another
      </Button>
    </>
  )

}
