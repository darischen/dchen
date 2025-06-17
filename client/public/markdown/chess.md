## Overview
Mini-Stockfish is a chess engine modeled after the high level architecture of the current strongest chess engine, Stockfish. It is designed to provide a fast and efficient playing experience. It incorporates advanced techniques such as a book of opening moves, endgame tablebases, and a neural network for evaluation. The engine is built using Python and Cython, leveraging libraries like python-chess for move generation and evaluation. The PyGame portion of the project is adapted from a tutorial from a YouTube channel called "Coding Spot". From the original code, bug fixes have been made and some additional features have been added.

([Coding Spot's (AlejoG10) YouTube Tutorial](https://www.youtube.com/watch?v=OpL0Gcfn4B4))

([AlejoG10's GitHub Repository](https://github.com/AlejoG10/python-chess-ai-yt))

([GitHub Link](https://github.com/darischen/Mini-Stockfish))

---

## Quick Summary
- A chess engine inspired by Stockfish, designed for speed and efficiency.
- Utilizes a book of opening moves, endgame tablebases, and a neural network for evaluation.
- Implements a minimax search algorithm with alpha-beta pruning.
- Further pruning is enabled by advanced move ordering techniques.
- Multi-threaded search capabilities using ThreadPoolExecutor.

---

## Key Features
- Book of opening moves
  - The JSON is converted into a zobrist hash table for fast lookup
  - Each position in each opening line is evaluated using Stockfish at Depth 22
  - The code chooses the best move from the opening book if available
- Gaviota and Syzygy Tablebases for perfect endgame play
- Custom DLLs for fast move generation
- Linear Feed Forward Neural Network for evaluation
- Minimax search with alpha beta pruning and advanced move ordering
- Static evaluation function using heuristic methods like piece-square tables, mobility, king safety, and pawn structure
- Multi-threaded search using ThreadPoolExecutor
- Cython for performance optimization
- Iterative deepening for efficient search
- Transposition table for storing previously evaluated positions
- Accumulator for efficient evaluation of positions
- Move Ordering techniques to improve search efficiency
- Support for UCI (Universal Chess Interface) protocol for engine communication
- Quiescence search to handle tactical positions
- Heuristic evaluation functions for non-neural network evaluations
---

## Tools Used
- Python
- Pygame
- Cython
- python-chess
- scikit-learn
- numpy
- pandas
- torch
- ThreadPoolExecutor
- Syzygy Tablebase
- Gaviota Tablebase
- Stockfish
- Custom dlls
- Linear Feed Forward Neural Network
- tqdm

---

## Images

### Chess Board
![Chess Board](/markdown/chess-assets/board.png)

### Opening Book Printout
![Book Moves](/markdown/chess-assets/book.png)

### Printout of Minimax Search and Iterative Deepening
![Minimax](/markdown/chess-assets/minimax.png)

### Codebase UML Diagram
![UML](/markdown/chess-assets/uml.jpg)

---

## Schema