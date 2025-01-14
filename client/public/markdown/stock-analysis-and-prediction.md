## Overview
The stock price prediction program, named for the volatility of Tesla (TSLA) stock caused by Elon Musks' tweets on X, formerly known as Twitter, is a project that bridges the gap between coding and my stock portfolio.

([GitHub Link](https://github.com/darischen/EEWS))

---

## Quick Summary
- Currently, only predictions based on past closing prices per day are supported.

- Training on bollinger bands, trading volume, opening prices, and stochastic oscillators will be implemented later on.
  
- This project is still under construction.

---

## Key Features
- The model type used is a Long Short-Term Memory model, which is a type of Recurrent Neural Network.
- So far, the model is trained on daily closing prices, but in the future, it will take into account opening prices, trade volume, bollinger bands, and the stochastic oscillator.

## Tools Used
- Cuda
- CuDNN
- Jupyter Notebook

## Images

### Price Predictions vs Historical Data
![Predictions](/markdown/eews-assets/predictions.png)
![NVDA](/markdown/eews-assets/NVDA.png)