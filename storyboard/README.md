
Experiment 1: To study the generation of Polar RZ/NRZ line codes.

### 1. Story Outline:

The experiment is to study the generation of the Polar RZ/NRZ line codes from the sequence given by the user. Student will learn the concept of ‘Line Coding and able to convert the binary data into Polar RZ/NRZ line codes and also able to compare between RZ and NRZ digital signal on the basis of their characteristics. In this experiment the simulator is designed in a way to give the Polar RZ/NRZ line codes on the basis of input entered by the User.

### 2. Story:

In this experiment ,we will obtain Unipolar RZ/NRZ  line codes. In Polar line coding scheme, in which positive voltage defines bit ‘1’and the zero voltage defines bit ‘0’. In RZ Polar line coding signal return to zero at the middle of the bit whereas in NRZ Polar signal does not return to zero at the middle of the bit.

In this experiment simulator will provide introduction to the user about Polar RZ and NRZ and produce line codes on the basis of  binary sequence provided by the user.The user is asked to enter the number of bits in the sequence and also is able to enter the bits of the sequence and then click on submit followed by choosing between RZ and NRZ or both. After the experiment the  end-user will be able to understand Polar RZ and NRZ line codes and also able to compare between RZ and NRZ digital Signals.

#### 2.1 Set the Visual Stage Description:

In this experiment the simulator starts with the window asking the user to click on the tab of Introduction or experiment. Clicking on Introduction the simulator will provide the conceptual knowledge of Unipolar RZ and NRZ line codes after that user will reach to the experiment part where user is asked to enter the length of the sequence and  the bits of the sequence. In any how, if the user does not enter binary digits or enter mismatch information the simulator will prompt an error after clicking the submit button, so the user needs to enter the information carefully. After that user can choose between RZ and NRZ or both and click on submit. Also if user click on submit button without entering the information the simulator will again show the error.

After submitting the information the simulator will convert the given binary sequence into the Unipolar RZ/NRZ as asked and will generate the graph showing Unipolar RZ/NRZ line codes.
#### 2.2 Set User Objectives & Goals:
Describe the objectives and goals in details here : (guide : The user should clearly understand the aims and objective of the experiment. ( how he will begin experiment. ?  in descriptive))

#### 2.3 Set the Pathway Activities:

Describe the pathway activites here : (Guide : Set the pathway activities in line with the learning objectives (LOs)  & with a view to achieve the goals set in round #0 & round#1.  (once he begins, how he will traverse through the entire experiment ? in descriptive))

##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:

Describe the challenges Here : (guide : Set Challenges and Questions/Complexity/variations in questions according to User’s level, so as to invoke the learners’ interest.  (while traversing, what challenges he will face? how he has to solve and overcome ? descriptive).)

##### 2.5 Allow pitfalls:
Describe the pitfalls here: (guide : (while traversing or while solving challenge, how will we bring a situation in front of him that he commits mistake if he is not attentive , or not following procedure , descriptive))

##### 2.6 Conclusion:
Describe conclusion here : (guide: This may include displaying: how much time did the user take to solve the questions/ How many questions were right?/ How many hints did the learner use. Based on this the evaluation/marking to be suggested to the user. (once he is towards the completion of the experiment, what LO he is taking along with him, what will be his probable, interpretation/conclusion , descriptive) )

##### 2.7 Equations/formulas: NA
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
      
Type equations here : (guide : ( a separate sheet having equations / programs for the lab exper3ment to be shared along with the Story submissions (1) . You can mark it as numerical reference numbers within the story narration (like we cite in the research papers) and then separately share these equations/programs sheets as a reference, do not include the equations as a whole in the narration))
Tool can be used to integrate formula in Markdown <b> [here](http://latex.codecogs.com/eqneditor/samples/example3.php) </b>


### 3. Flowchart 4
<img src="flowchart/flowchart.png"/><br>
link to flow chart Here : Store in the  /flowchart folder within Round2 folder in your repo
<br>
(guide :The lab proposer should extract logic from the story, prepare a flowchart from the story narration and write the algorithm to execute the black box.  use Google Drawings https://docs.google.com/drawings/ (send the link to your flowchart and also attach .png by exporting it )

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
 Link to mindmap here : Store the mindmap in both .mm & .png extension in the  /mindmap folder and include link of only .pdf verison here
 <br>
 (guide : An elaborate mind map (connecting all the points in the experiment flow ) should be prepared and submitted by the lab proposer. The mind map should be a clear and detailed document that takes into account all minute intri5acies involved in the development of virtual lab. The mindmap should be self-content and any developer across the globe should be able to code it with all those details. using only FreeMind http://freemind.sourceforge.net/wiki/index.php/Main_Page (send the .png file and also the original .mm extension project file. )

### 5. Storyboard :
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
Link to storybaord (.gif file ) here :
(guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool) . tutorial on how to use it https://www.youtube.com/watch?v=LAeCEpG0KX4
