const btn = document.getElementById("submitButton");
const searchResultContainer = document.getElementById("definitionsContainer")
const synonymContainer = document.getElementById("synonymsContainer");

//DICTIONARY 
var api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
//add word thats getting looked up at the end of the link


btn.addEventListener('click', () => {
  console.log("click has been detected");
  const searchedWord = document.getElementById("searchedWord");
  getDefinition(searchedWord.value);
});




function getDefinition(word) {
  var link = api + word;
  //find all required information from api for the word being searched
  console.log(link);
  fetch(link)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      //console.log(data[0].meanings[0].definitions[0].definition);
      renderDefinition(data);
    })
    
    //.then((wordInput) => renderDefinition(wordInput))
};




function renderDefinition(wordData) {
  //maybe try storing info into one word object, then iterate through appending each one to be displayed
  
  //get information about word searched and show on screen
  console.log(wordData[0]);

  //Name of word getting searched
  let wordGettingDefined = document.createElement("h1");
  wordGettingDefined.innerHTML = wordData[0].word;
  searchResultContainer.appendChild(wordGettingDefined);

  
  let wordType = document.createElement("p");
  wordType.innerHTML = wordData[0].meanings[0].partOfSpeech;
  searchResultContainer.appendChild(wordType);

  let line = document.createElement("hr");
  searchResultContainer.appendChild(line);
  
  let wordDefinition = document.createElement("p");
  wordDefinition.innerHTML = wordData[0].meanings[0].definitions[0].definition;
  searchResultContainer.appendChild(wordDefinition);

  let synonymHeading = document.createElement("h3");
  synonymHeading.innerHTML = "Synonyms";
  searchResultContainer.appendChild(synonymHeading);

  
  //synonyms.innerHTML = wordData[0].meanings[3].synonyms[0];
  
  
  //console.log(hopefullySynonym.length);
  findSynonyms(wordData);
}

function findSynonyms(wordInput) {
  //loop through all meanings
  for (let j = 0; j < wordInput[0].meanings.length; j++) {
    let synonymArrayLocation = Object.keys(wordInput[0].meanings[j]);
      for (let i = 0; i < synonymArrayLocation.length - 1; i++) {
      //console.log(word[0].meanings[meaningsAmount].synonyms[0]);
        if (synonymArrayLocation[i] == "synonyms" && wordInput[0].meanings[j].synonyms.length > 0) {
          console.log("synonyms are being checked");
          let synonymLocation = wordInput[0].meanings[j].synonyms;
          printSynonyms(synonymLocation);
          //console.log();
        }
      }
  }
}

function printSynonyms(synonymArray) {
  for (let i = 0; i < synonymArray.length; i++) {
    let synonym = document.createElement("p");
    synonym.innerHTML = synonymArray[i];
    synonymContainer.appendChild(synonym);
  }
}
