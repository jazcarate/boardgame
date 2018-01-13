import { Client } from 'boardgame.io/client'
import { Game } from 'boardgame.io/core'
import { Board } from './Board'

const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell (G, ctx, id) {
      let cells = [...G.cells]
      cells[id] = ctx.currentPlayer
      return { ...G, cells }
    }
  }
})

const App = Client({
  game: TicTacToe,
  board: Board
})

export default App
