import React, { useState, useEffect } from 'react';
import './minesweeper.css'

const Minesweeper = () => {
  const [gameboard, setGameBoard] = useState([])
  const ROWS = 10
  const COLS = 10
  const BOMB_FREQUENCY = 0.1

  useEffect(() => {
    setGameBoard(newGameboard())
  }, [])

  const newGameboard = () => {
    let arr = []

    for (let r = 0; r < ROWS; r++) {
      arr.push([])
      for (let c = 0; c < COLS; c++) {
        let isBomb = Math.random() < BOMB_FREQUENCY
        let newGridCell = new GridCell(r, c, isBomb)
        arr[r].push(newGridCell)

        if (isBomb) {
          for (let i = -1; i < 1; i++) {
            for (let ci = -1; ci <= 1; ci++) {
              if (r + i >= 0 && r + i < ROWS && c + ci >= 0 && c + ci < COLS && arr[r + i][c + ci] && !arr[r + i][c + ci].isBomb) {
                arr[r + i][c + ci].n++
              }
            }
          }
        } else {
          for (let i = -1; i < 1; i++) {
            for (let ci = -1; ci <= 1; ci++) {
              if (r + i >= 0 && r + i < ROWS && c + ci >= 0 && c + ci < COLS && arr[r + i][c + ci] && arr[r + i][c + ci].isBomb) {
                arr[r][c].n++
              }
            }
          }
        }
      }
    }

    return arr
  }

  const updateCell = (y, x) => {
    const updatedGameboard = gameboard.map(row => [...row]);
    updatedGameboard[y][x].isRevealed = true;
    const updateNeighbors = (y, x) => {
      if (y - 1 >= 0 && y - 1 <= ROWS && !updatedGameboard[y - 1][x].isBomb && updatedGameboard[y - 1][x].n == 0) {
        updatedGameboard[y - 1][x].isRevealed = true
        updateNeighbors(y - 1, x)
      }
    }
    if (updatedGameboard[y][x].n == 0) {
      updateNeighbors(y, x)
    }
    setGameBoard(updatedGameboard);
  }

  class GridCell {
    constructor(y, x, isBomb) {
      this.n = 0;
      this.y = y;
      this.x = x;
      this.isBomb = isBomb;
      this.isRevealed = false;
    }
  }

  return (
    <div>
      {gameboard.map((row) =>
        <div style={{ display: 'flex', margin: '0' }}>
          {row.map((cell) =>
            <p style={{ display: 'flex', margin: '0', border: '1px solid gray', height: '30px', width: '30px', alignContent: 'center', justifyContent: 'center' }} onClick={() => updateCell(cell.y, cell.x)}>
              {cell.isRevealed ? cell.isBomb ? 'x' : cell.n : ' '}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export { Minesweeper }






























// const Minesweeper = () => {
//   const [gameBoard, setGameBoard] = useState([])
//   const [playerBoard, setPlayerBoard] = useState([])
//   const COLS = 10
//   const ROWS = 10

//   useEffect(() => {
//     let b = []
//     for (let i = 0; i < ROWS; i++) {
//       b.push(new Array(COLS).fill(0))
//     }
//     setGameBoard(b)

//     setThePlayerBoard()
//   }, [])

//   const setThePlayerBoard = () => {
//     setPlayerBoard([])
//     let a = []
//     for (let i = 0; i < ROWS; i++) {
//       a.push(new Array(COLS).fill(' '))
//     }
//     setPlayerBoard(a)
//   }

//   const newBoard = () => {
//     setThePlayerBoard()
//     for (let currentRow = 0; currentRow < ROWS; currentRow++) {
//       for (let currentCell = 0; currentCell < ROWS; currentCell++) {
//         let isBomb = Math.random() < 0.1

//         if (isBomb) {
//           let newB = [...gameBoard]
//           newB[currentRow][currentCell] = 'x'
//           setGameBoard(newB)

//           for (let checkRow = -1; checkRow <= 1; checkRow++) {
//             for (let checkCell = -1; checkCell <= 1; checkCell++) {
//               if (currentRow + checkRow >= 0 && currentRow + checkRow < ROWS && currentCell + checkCell >= 0 && currentCell + checkCell < COLS && gameBoard[currentRow + checkRow][currentCell + checkCell] != 'x') {
//                 let aNewB = [...gameBoard]
//                 aNewB[currentRow + checkRow][currentCell + checkCell] += 1
//                 setGameBoard(aNewB)
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   const clickCell = (row, cell) => {
//     let clickedCell = gameBoard[row][cell]
//     if (clickedCell == 'x') {
//       alert('bomb!')
//       setPlayerBoard(gameBoard)
//     } else if (Number.isInteger(clickedCell) && clickedCell != 0) {
//       let pb = [...playerBoard]
//       pb[row][cell] = gameBoard[row][cell]
//       setPlayerBoard(pb)
//     } else if (Number.isInteger(clickedCell) && clickedCell == 0) {
//       const zeroCell = (r, c, zcgb = null, zcpb = null) => {
//         if (r - 1 >= 0 && Number.isInteger(zcgb[r - 1][c]) && zcgb[r - 1][c] == 0) {
//           zcpb[r - 1][c] = 0
//           zeroCell(r - 1, c, zcgb, zcpb)
//         }
//         if (r + 1 < ROWS && Number.isInteger(zcgb[r + 1][c]) && zcgb[r + 1][c] == 0) {
//           zcpb[r + 1][c] = 0
//           // zeroCell(r + 1, c, zcgb, zcpb)
//         }
//         if (c - 1 < COLS && Number.isInteger(zcgb[r][c - 1]) && zcgb[r][c - 1] == 0) {
//           zcpb[r][c - 1] = 0
//           // zeroCell(r, c - 1, zcgb, zcpb)
//         }
//         if (c + 1 < COLS && Number.isInteger(zcgb[r][c + 1]) && zcgb[r][c + 1] == 0) {
//           zcpb[r][c + 1] = 0
//           // zeroCell(r, c + 1, zcgb, zcpb)
//         }
//       }
//       let pb = [...playerBoard]
//       let gb = [...gameBoard]
//       pb[row][cell] = gameBoard[row][cell]
//       zeroCell(row, cell, gb, pb)
//       setPlayerBoard(pb)
//     }
//   }

//   return (
//     <div>
//       <button onClick={() => newBoard()}>newBoard</button>
//       {playerBoard.map((row, rowIndex) => {
//         return <div style={{ display: 'flex', margin: '0px' }}>
//           {row.map((cell, cellIndex) => {
//             return <p onClick={() => clickCell(rowIndex, cellIndex)} style={{ display: 'flex', margin: '0px', height: '30px', width: '30px', border: '1px solid gray', alignContent: 'center', justifyContent: 'center' }}>{cell}</p>
//           })}
//         </div>
//       })}
//     </div>
//   )

// }

// export { Minesweeper }
