const button = document.getElementById("countButton");

button.addEventListener("click", function() {
   let typedText = document.getElementById("textInput").value;
   let letras = typedText.toLowerCase().replace(/[^a-z'\s]+/g, "");
   let word = typedText.toLowerCase().replace(/[^a-z'\s]+/g, "").split(/\s/);
   palavras(letras);
   words(word);
});


function palavras (typedText){

   const letterCounts = {};

   for (let i = 0; i < typedText.length; i++) {
      let currentLetter = typedText[i];
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } else { 
         letterCounts[currentLetter]++; 
      }    
   }

   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }

}

function words (typedText){

   const wordsCounts = {};

   for (let i = 0; i < typedText.length; i++) {
      let currentWord = typedText[i];
      if (wordsCounts[currentWord] === undefined) {
         wordsCounts[currentWord] = 1; 
      } else { 
         wordsCounts[currentWord]++; 
      }    
   }

   for (let word in wordsCounts) { 
      const span = document.createElement("span"); 
      const wordContent = `"${word}": ${wordsCounts[word]}, `;
      span.innerText = wordContent; 
      const words = document.getElementById("wordsDiv");
      words.appendChild(span); 
   }

}

