import { client } from 'boardgame.io/client'
import { game } from 'boardgame.io/core'

const TicTacToe = game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell (G, ctx, id) {
      let cells = [...G.cells]
      cells[id] = ctx.currentPlayer
      return { ...G, cells }
    }
  }
})

const App = client({ game: TicTacToe })

export default App
