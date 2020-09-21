
### Aim<br>
To Study the generation of Polar RZ and NRZ line codes.
### Theory<br>
Polar coding scheme uses multiple voltage level to represent binary values.

1.NRZ(Non-Return-to-zero):-<br>

  In polar NRZ signal does not return to zero at the middle of the bit.

2.RZ (Return-to-zero):-<br>

  In RZ Polar line coding, signal return to zero at the middle of the bit.<br>
  Formula for Polar RZ and NRZ line codes is :- 

<b> For Polar RZ: </b> 
      
If symbol 1 transmitted :-
      
      X(t) =     A/2     for 0 <= t <= Tb/2  (half interval) 
                   0     for Tb/2 <= t <= Tb (half interval) 
                          
  If symbol 0 transmitted :- <br>

      X(t) =     - A/2     for 0 <= t <= Tb/2  (half interval) 
                     0     for Tb/2 <= t <= Tb (half interval)  
      
<b> For Polar NRZ: </b> 
      
If symbol 1 transmitted :- 
      
      X(t) =    A/2     for 0 <= t <= Tb  
                                           
  If symbol 0 transmitted :-

      X(t) =  - A/2     for 0 <= t <= Tb 
 <br>     
### Procedure<br>
<br>
1. In this experiment the simulator starts with the window asking the user to click on the tab of Introduction or experiment.<br>
2. Clicking on Introduction the simulator will provide the conceptual knowledge of polar RZ and NRZ line codes after that user will reach to the experiment part where user is asked to enter the length of the sequence and  the bits of the sequence.<br>
3. In any how, if the user does not enter binary digits or enter mismatch information the simulator will prompt an error after clicking RZ/NRZ/Both button, so the user needs to enter the information carefully.<br>
4. After that user can choose among RZ, NRZ or both button. Also if the user click on RZ/NRZ/Both button without entering the information, the simulator will again prompt an error.<br>
5. After submitting the information the simulator will convert the given binary sequence into the polar RZ and NRZ as asked and will generate the graph showing Polar RZ/NRZ line codes.<br>

### Pre Test
#### Please attempt the following questions
<br>
1) Polar coding is a technique in which - <br>
<b>A. 1 is transmitted by a positive pulse and 0 is transmitted by negative pulse.<br></b>
B. 1 is transmitted by a positive pulse and 0 is transmitted by zero volts.<br>
C. None of the above.<br>

<br>
2) In polar NRZ format for coding, symbol '0' is represented by<br>
A. Zero voltage<br>
<b>B. Negative voltage<br></b>
C. Pulse is transmitted for half the duration<br>
D. All options are correct<br>

<br>
3) In Polar RZ format for coding, symbol '0' is represented by:-<br>
A. Amplitude of pulse is half.<br>
B. Negative Voltage.<br>
C. Pulse is transmitted for half the duration.<br>
<b>D. All of the above.<br></b>
<br>
### Post Test<br>
#### Please attempt the following questions<br>
<br>
Q 1. In which waveform logic '1' and logic '0' are represented by opposite signs and half bit wide pulses?<br>
A. Unipolar RZ<br>
<b>B. Polar RZ<br></b>
C. RZ-AMI<br>
D. Manchester Coding<br>

Q 2. The disadvantages of polar RZ Signaling are −<br>
A. No error correction<br>
B. No Clock<br>
C. Occupies twice the Bandwidth of Polar NRZ<br>
<b>D. All of the above<br></b>
<br>

Q 3. For a line code, the transmission bandwidth must be:-<br>
A. Maximum possible<br>
<b>B. As small as possible<br></b>
C. Depends on the signal<br>
D. None of the above<br>

### References<br>
1. "Modern Digital and Analog Communication Systems", 4th Edition, B. P. Lathi and Zhi Ding, Oxford University Press.<br>
2. “Principles Of Communication Systems”, Herbert Taub, Donald L Schilling, Goutam Saha, Tata McGraw Hill Publishing House.<br>
3. “Digital Communications”, Simon Haykin, Wiley India.<br>
