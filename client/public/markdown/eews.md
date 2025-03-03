## Overview
The stock price prediction program, named for the volatility of Tesla (TSLA) stock caused by Elon Musks' tweets on X, formerly known as Twitter, is a project that bridges the gap between coding and my stock portfolio. This project is still in the early stages of development, as such, it still has a long way to go before it will be deployed for real trading decisions.

([GitHub Link](https://github.com/darischen/EEWS))

---

## Quick Summary
- Currently, only predictions based on past closing prices, opening prices, high, low, and adjusted close per day are supported.
  
- This project is still under construction.

- Future prospects:
  - Model training will be improved by implementing data regarding bollinger bands, moving averages, and stochastic oscillators.
  - Implementing a web scraper combined with the Hugging face transformer library and a localized and distilled LLM to quantify the effects of Musk’s tweets on the stocks being tracked.


---

## Key Features
- Applied a Long Short-Term Memory (LSTM) model leveraging Adaptive Moment Estimation (ADAM) optmizer for gradient descent calculation.
- As of now, the model is mainly trained on the daily closing prices, opening prices, high, low, and adjusted close of each stock it predicts.
- In the future, it will take into account opening prices, trade volume, bollinger bands, and the stochastic oscillator.
- The current dataset used has 6 features and 28 million entries.

## Tools Used
- Cuda
- cuDNN
- Adam Optimizer
- LSTM
- Jupyter Notebook
- PyTorch
- Python

## Images

### Price Predictions vs Historical Data
![Predictions](/markdown/eews-assets/predictions.png)
![NVDA](/markdown/eews-assets/NVDA.png)