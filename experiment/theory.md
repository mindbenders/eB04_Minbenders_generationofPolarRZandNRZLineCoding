<b>Theory<br></b>

Polar coding scheme uses multiple voltage level to represent binary values.

1.NRZ(Non-Return-to-zero):-<br>

  In NRZ Bipolar signal does not return to zero at the middle of the bit.

2.RZ (Return-to-zero):-<br>

  In RZ Polar line coding, signal return to zero at the middle of the bit.
  Formula for Polar RZ and NRZ line codes is :- 

<b> For Polar RZ: <b> 
      
If symbol 1 transmitted :-
      
      X(t) =     A/2     for 0 <= t <= Tb/2  (half interval) 
                   0     for Tb/2 <= t <= Tb (half interval) 
                          
  If symbol 0 transmitted :- <br>

      X(t) =     - A/2     for 0 <= t <= Tb/2  (half interval) 
                     0     for Tb/2 <= t <= Tb (half interval)  
      
<b> For Polar NRZ: <b> 
      
If symbol 1 transmitted :- 
      
      X(t) =    A/2     for 0 <= t <= Tb  
                                           
  If symbol 0 transmitted :-

      X(t) =  - A/2     for 0 <= t <= Tb 
