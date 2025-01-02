## Overview
This 16-bit adder deviates from the standard adder implementation. The basic addition process is adding two numbers and then determining if there is a carry. This is called Ripple Carry addition, where the next digit operations depend on the completion of the previous digit. Carry Look-Ahead calculates all the carry operations at once, reducing computation time at the cost of power.

([GitHub Link](https://github.com/darischen/16bitAdder))

---

## Quick Summary
- The Single Level CLA adder performs Carry Look-Ahead in 4 bit blocks and uses Ripple Carry addition to connect each 4 bit operation together.

- The Two Level CLA adder builds on the Single Level CLA adder by performing Carry Look-Ahead on the Ripple Carry operation results, becoming a Carry Look-Ahead full adder.

- This implementation is derived from the standard Carry Look-Ahead full adder equations.

- Both implementations have a variation to accomodate the 2421 weighted binary coded decimal representation.

---

## Key Features
- 16-bit addition with carry out operations
- Uses Carry-generate and Carry-propagate functions to calculate the carryout of each sequence.
- 2421 weighted binary coded decimal representation and error detection.

---

## Tools Used
- Digital (Digital Logic Hardware Simulator)
- ([Digital GitHub Link](https://github.com/hneemann/Digital))
  
---

## Images

### 4 Bit Adder
![4 Bit Adder](/markdown/16bit-adder-assets/4BitAdder.png)

### Single Level CLA

![Single Level CLA](/markdown/16bit-adder-assets/SingleLevelCLA.png)

### Two Level CLA

![Two Level CLA](/markdown/16bit-adder-assets/TwoLevelCLA.png)

### Extended CLA Module

![Extended CLA Module](/markdown/16bit-adder-assets/ExtendedCLA.png)

### 2421 Corrector Module

![2421 Corrector](/markdown/16bit-adder-assets/2421Corrector.png)

### 2421 Single Level CLA

![2421 Single](/markdown/16bit-adder-assets/2421Single.png)

### 2421 Two Level CLA

![2421 Two](/markdown/16bit-adder-assets/2421Two.png)

---

## Schema
The standard implementation of a single-bit full adder is defined as such: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inputs: x<sub>i</sub>, y<sub>i</sub>, and c<sub>i</sub> \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outputs: s<sub>i</sub> and c<sub>i+1</sub>.

$$
\begin{aligned}
s_i 
&= x_i \cdot y_i \cdot c_i 
   \;+\; x_i \cdot \overline{y_i} \cdot \overline{c_i}
   \;+\; \overline{x_i} \cdot \overline{y_i} \cdot \overline{c_i} \\
&= x_i \Bigl( y_i \cdot c_i \;+\; \overline{y_i} \cdot \overline{c_i} \Bigr)
   \;+\; \overline{x_i} \Bigl( y_i \cdot \overline{c_i} \;+\; \overline{y_i} \cdot c_i \Bigr ) \\
&= x_i \;\overline{(y_i \oplus c_i)} \;+\; \overline{x_i}\;(y_i \oplus c_i) \\
&= x_i \oplus y_i \oplus c_i \\[6pt]
c_{i+1}
&= x_i \cdot c_i 
   \;+\; y_i \cdot c_i 
   \;+\; x_i \cdot y_i \\
&= x_i \cdot \overline{y_i} \cdot c_i \;+\; \overline{x_i} \cdot y_i \cdot c_i + x_i \cdot y_i \\
&= c_i \cdot (x_i \cdot \overline{y_i} \;+\; \overline{x_i} \cdot y_i) + x_i \cdot y_i \\
&= (x_i \oplus y_i) \cdot c_i + x_i \cdot y_i \\
\end{aligned}
$$

An adder for numbers of *n* length can be created from a serial connections of single-bit full adders, detailed above. However, each subsequent bit *i* where 1 $\leq$ *i* $\leq$ *n* after the first bit i = 0 depends on the calculation before it being complete before the operation on the current bit can be performed. This is because the previous iteration's output carry-out is the input carry-out for the current iteration. The current calculation cannot proceed until the previous one has finished. This implementation is called the Ripple Carry Adder.

One flaw of the Ripple Carry Adder is the high delay between the input and output. A rectification of this problem is the Carry Look Ahead Adder, which enables the higher indexed carry inputs to be calculated in parallel, rather than waiting on previous carry operations to output. Two new functions are now added: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Carry-generate function:  $g_i = x_i \cdot y_i$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Carry-propagate function: $p_i = x_i \oplus y_i$

These functions enable the sum function *s<sub>i</sub>* and carry function *c<sub>i+1</sub>* to be simplified to: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $s_i = p_i \oplus c_i$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c_{i+1} = g_i + (p_i \cdot c_i)$

Expanding the carry out function for $c_1 \dots c_4$ gives us:
$$
\begin{align*}
    c_1 &= g_0 + (p_0 \cdot c_0) \\
    c_2 &= g_1 + (p_1 \cdot c_1) = g_1 + (p_1 \cdot g_0) + (p_1 \cdot p_0 \cdot c_0) \\
    c_3 &= g_2 + (p_2 \cdot c_2) = g_2 + (p_2 \cdot g_1) + (p_2 \cdot p_1 \cdot g_0) + (p_2 \cdot p_1 \cdot p_0 \cdot c_0) \\
    c_4 &= g_3 + (p_3 \cdot c_3) + (p_3 \cdot p_2 \cdot g_1) + (p_3 \cdot p_2 \cdot p_1 \cdot g_0) + (p_3 \cdot p_2 \cdot p_1 \cdot p_0 \cdot c_0)
\end{align*}
$$
These carry out equations give us the carry out inputs for the operations on the first four bits after the first. The carry outs have been computed in parallel. However, the calculation for $c_4$ requires a 5-input logical OR gate, which is time consuming and costly. We can transform the equation for $c_4$ to become: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$c_4 = G_{0,3} + (P_{0,3} \cdot c_0)$

Where $G_{0,3}$ and $P_{0,3}$ are defined as: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $G_{0,3} = g_3 + (p_3 \cdot g_2) + (p_3 \cdot p_2 \cdot g_1) + (p_3 \cdot p_2 \cdot p_1 \cdot g_0)$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $P_{0,3} = p_3 \cdot p_2 \cdot p_1 \cdot p_0$

The implementation of the circuit uses an alternative but equivalent set of equations to perform the calculations. Swapping each logical OR gate with a logical AND gate and each XOR gate with XNOR gates gives us: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $s^{*}_i = x_i \odot y_i \odot c_i$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c^{*}_{i+1} = ((x_i \odot y_i) \;+\; c_i) \cdot (x_i \;+\; y_i)$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $g^{*}_{i} = x_i \;+\; y_i$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $p^{*}_{i} = x_i \odot y_i$

With these alternative equations laid out, the alternative carry functions can now be calculated: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c_1 = g_0 \cdot (p_0 \;+\; c_0)$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c_2 = g_1 \cdot (p_1 \;+\; c_1) = g_1 \cdot (p_1 \;+\; g_0) \cdot (p_1 \;+\; p_0 \;+\; c_0)$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c_3 = g_2 \cdot (p_2 \;+\; c_2) = g_2 \cdot (p_2 \;+\; g_1) \cdot (p_2 \;+\; p_1 \;+\; g_0) \cdot (p_2 \;+\; p_1 \;+\; p_0 \;+\; c_0)$ \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $c_4 = g_3 \cdot (p_3 \;+\; g_2) \cdot (p_3 \;+\; p_2 \;+\; g_1) \cdot (p_3 \;+\; p_2 \;+\; p_1 \;+\; g_0) \cdot (p_3 \;+\; p_2 \;+\; p_1 \;+\; p_0 \;+\; c_0) $

These are the equations implemented in the 4 Bit Adder image, and four of these 4 bit adders are connected in series with each other in the Ripple Carry Adder fashion. However, in Two Level CLA, the ripple carry between the four blocks are now connected with Carry Look-Ahead, using the same equations as each 4 bit adder.