function Text_Area(){
    const t1=document.createElement("textarea");
    t1.className= "textarea-element";
    t1.placeholder="Write Here. You can drag the box how you want"
    t1.maxLength="500";
    const element=document.getElementById("a4");
    element.appendChild(t1);  
    
 }
    
 function Input_Box(){
   const t2=document.createElement("input");
   t2.className = "skills";
   t2.type="text";
   t2.placeholder="Input text here.";
   const element=document.getElementById("a4");
   element.appendChild(t2);
 }

 function Skill_Range(){
   const t3=document.createElement("input");
   const r1=document.createElement("input");
   const b=document.createElement("br");
   r1.type="range";
   r1.className="rng";
   // r1.style="display:block;"
   t3.className = "inp1";
   t3.type="text";
   t3.placeholder="Skill";
   t3.style="width: 100px; text-align: center; color:black;";
   const element=document.getElementById("skil");
   element.appendChild(t3);
   element.appendChild(r1);
   
 }
 function Header(){
   const h2=document.createElement("input");
   h2.className = "inp";
   h2.type="text";
   h2.placeholder="Hearder";
   const element=document.getElementById("a4");
   element.appendChild(h2);
 }

 //To remove textArea
 function RmText_Area(){
  const Rm=document.getElementsByClassName("textarea-element");
  // console.log(Rm.length);
  // console.log(Rm[Rm.length-1])
  if(Rm.length>0){
       Rm[Rm.length-1].remove();
  }
 }

 //To remove input-box
 function RmInput_Box(){
  const Rm=document.getElementsByClassName("skills");
  // console.log(Rm.length);
  // console.log(Rm[Rm.length-1])
  if(Rm.length>0){
       Rm[Rm.length-1].remove();
  }
 }

 //To remove skill and range
 function RmSkill_Range(){
  const Rm=document.getElementsByClassName("inp1");
  const R=document.getElementsByClassName("rng");
  // console.log(Rm.length);
  // console.log(Rm[Rm.length-1])
  console.log(R[R.length-1])
  console.log(R.length);
  if(Rm.length>0){
       Rm[Rm.length-1].remove();
       R[R.length-1].remove();
  }
 }

 //To remove Header
 function RmHeader(){
  const Rm=document.getElementsByClassName("inp");
  // console.log(Rm.length);
  // console.log(Rm[Rm.length-1])
  if(Rm.length>0){
       Rm[Rm.length-1].remove();
  }
 }
