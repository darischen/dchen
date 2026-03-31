## Overview
Mini-Stockfish is a comprehensive chess engine implementation designed to provide fast, efficient gameplay with competitive AI strength. The engine combines advanced search algorithms, neural network evaluation, opening book integration, and endgame tablebases to create a capable opponent. Built entirely in Python with Cython optimizations, the engine features bitboard-based move generation, a trained NNUE (Neural Network Use Evaluation) system evaluated on 316 million Stockfish positions, minimax search with alpha-beta pruning, iterative deepening, quiescence search, transposition tables, and sophisticated move ordering. The integrated PyGame GUI provides an intuitive chess interface with sound effects, visual feedback, and complete rule validation including check, checkmate, stalemate, and draw detection.

([GitHub Link](https://github.com/darischen/Mini-Stockfish))

---

## Quick Summary
- A chess engine inspired by Stockfish, designed for speed and efficiency.
- Utilizes a book of opening moves, endgame tablebases, and a neural network for evaluation.
- Implements a minimax search algorithm with alpha-beta pruning.
- Further pruning is enabled by advanced move ordering techniques.
- Trained on 316 million Stockfish-evaluated positions for competitive play strength.

---

## Key Features
- NNUE Neural Network Evaluation
  - Trained on 316 million Stockfish-evaluated positions using chunked dataset processing (10M-row batches) with memory-mapped target files
  - HalfKP (Half King Piece) dual-perspective neural network: king_square × piece_square × piece_type encoding with 40,960 indices
  - Two perspectives per position (white king, black king) with separate 1024-dimensional embeddings summed for efficient evaluation
  - Significantly improved evaluation accuracy over traditional heuristic methods

- Advanced Search Algorithms
  - Minimax algorithm with alpha-beta pruning for efficient game tree exploration
  - Iterative deepening for real-time depth adjustment and time management
  - Quiescence search for tactical position handling beyond leaf nodes
  - Transposition table with Zobrist hash-based lookups and depth-aware probing (EXACT/LOWERBOUND/UPPERBOUND flags)
  - Move ordering using MVV-LVA (Most Valuable Victim - Least Valuable Attacker) heuristic and killer move strategy

- Incremental Neural Network Updates
  - Accumulator system maintaining HalfKP indices (padded to 30) with cached 1024-dim hidden activations
  - O(1) rollback via snapshot stacks, avoiding expensive FEN recomputation during search
  - Incremental updates by subtracting old embedding indices and adding new ones to hidden activations
  - Full recompute only on king moves or pawn promotions

- Opening Play
  - Integration of opening book with Zobrist hash table for fast position lookup
  - Opening book positions pre-evaluated for optimal move selection
  - Seamless transition from opening book to search-based play

- Endgame Play
  - Syzygy tablebase support for seven-piece endgame perfect play
  - Gaviota tablebase support for depth-to-mate (DTM) queries
  - Automatic tablebase consultation for endgame positions

- Move Generation & Validation
  - Bitboard-based move representation for efficient computation
  - Legal move generation implemented in C++ via Cython compilation for performance-critical search routines
  - Complete move validation with check and legal move detection
  - Support for all chess rules including castling, en passant, and pawn promotion
  - Stalemate, checkmate, and draw detection (threefold repetition, fifty-move rule, insufficient material)

- Game Interface
  - PyGame-based GUI with intuitive board visualization
  - Drag-and-drop piece movement with visual feedback
  - Sound effects for moves, captures, checks, and game completion
  - Visual check indicator for immediate threat awareness
  - Move history navigation with keyboard controls
  - Pawn promotion modal with piece selection UI
  - Multiple theme support with toggle controls

- Keyboard Controls
  - **A**: AI move for black (only if it's black's turn)
  - **S**: AI move for white (only if it's white's turn)
  - **R**: Reset game to starting position
  - **F**: Flip board perspective (useful for playing as black)
  - **E**: Load position from FEN string
  - **T**: Toggle theme (color scheme)
  - **Arrow Keys**: Navigate move history (Left/Right for backward/forward, Up/Down for tree-style navigation)

- Performance Optimization
  - Cython compilation (core_search.pyx) for critical path code acceleration
  - C++ backend via chess_movegen and nnue_inference libraries for move generation and evaluation
  - Efficient data structures and algorithms for competitive move generation speed
  - Bitboard representation for fast position encoding and move validation
  - Zobrist hashing with pre-computed random tables for O(1) incremental hash updates

---

## Tools Used
- Python 3.10+
- PyGame (GUI Framework)
- Cython (Performance Optimization)
- python-chess (Move Validation & Generation)
- PyTorch (Neural Network Framework)
- NumPy (Numerical Computing)
- Pandas (Data Processing)
- tqdm (Progress Tracking)
- Syzygy Tablebases (Endgame Data)
- NNUE (Neural Network Evaluation)
- Bitboard Representation (Move Encoding)
- Stockfish (Opening Book & Training Reference)

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