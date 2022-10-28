
 const texts = ["front-end Developer. . .", "full stack Developer. . .", "web developer. . ."];
 const div = document.querySelector(".text");

 let activeText = 0;
 let activeLetter = 0;
 txt = "";

 const addLetter = () => {
     txt += texts[activeText][activeLetter];
     div.textContent = txt;
     activeLetter++;

     if(activeLetter === texts[activeText].length){
         activeText++;
         
         if (activeText === texts.length) {
             return setTimeout(()=>{
                 activeText = 0;
                 txt = "";
                 activeLetter = 0;
                 addLetter();
             },3000);
         }

         return setTimeout(()=>{
             txt = "";
             activeLetter = 0;
             addLetter();
         },3000);
     }
     setTimeout(addLetter, 100);
 }

 addLetter();