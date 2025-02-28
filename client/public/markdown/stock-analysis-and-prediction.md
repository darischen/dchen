## Overview
The stock price prediction program, named for the volatility of Tesla (TSLA) stock caused by Elon Musks' tweets on X, formerly known as Twitter, is a project that bridges the gap between coding and my stock portfolio.

([GitHub Link](https://github.com/darischen/EEWS))

---

## Quick Summary
- Currently, only predictions based on past closing prices per day are supported.

- Training on bollinger bands, trading volume, opening prices, and stochastic oscillators will be implemented later on.
  
- This project is still under construction.

- Future prospects:
  - Model training will be improved by implementing data regarding bollinger bands, trading volume, opening prices, and stochastic oscillators.
  - Implementing a web scraper combined by the Hugging face transformer library to quantify the effects of Musk’s tweets on the stocks being tracked.


---

## Key Features
- Applied a Long Short-Term Memory (LSTM) model leveraging Adaptive Moment Estimation (ADAM) optmizer for gradient descent calculation.
- As of now, the model is mainly trained on the daily closing prices of each stock it predicts.
- In the future, it will take into account opening prices, trade volume, bollinger bands, and the stochastic oscillator.

## Tools Used
- Cuda
- cuDNN
- Jupyter Notebook
- PyTorch
- Python

## Images

### Price Predictions vs Historical Data
![Predictions](/markdown/eews-assets/predictions.png)
![NVDA](/markdown/eews-assets/NVDA.png)