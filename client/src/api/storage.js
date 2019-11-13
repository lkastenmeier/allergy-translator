//Get, add and remove data (my-cards) from/to localStorage

export function getCardFromStorage() {
  //get data from localStorage and return [] if no data was found
  try {
    const cards = localStorage.getItem("cards");
    const parsedCards = JSON.parse(cards);
    return parsedCards || [];
  } catch {
    return [];
  }
}
export function addCardToStorage(newCard) {
  //add data to localStorage if no matching dataset exists already
  const parsedCards = getCardFromStorage();
  if (!parsedCards.find(parsedCard => parsedCard.id === newCard.id)) {
    //check for matching datasets by comparing the id of existing and new Data
    parsedCards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(parsedCards));
  }
}
export function removeCardFromStorage(cardId) {
  //remove data to localStorage by matching with existing datasets
  const parsedCards = getCardFromStorage();
  for (let i = 0; i < parsedCards.length; i++) {
    if (parsedCards.find(parsedCard => parsedCard.id === cardId)) {
      //check for matching datasets by comparing the id of existing and new Data and splicing the matching object
      parsedCards.splice(i, 1);
      localStorage.setItem("cards", JSON.stringify(parsedCards));
      break;
    }
  }
}
