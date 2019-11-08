export function getCardsFromStorage() {
  try {
    const cards = localStorage.getItem("cards");
    const parsedCards = JSON.parse(cards);
    return parsedCards || [];
  } catch {
    return [];
  }
}
export function setCardsToStorage(newCard) {
  const cards = localStorage.getItem("cards");
  const parsedCards = JSON.parse(cards) || [];
  if (!parsedCards.find(parsedCard => parsedCard[2] === newCard[2])) {
    parsedCards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(parsedCards));
  }
}
export function removeCardsFromStorage(card) {
  const cards = localStorage.getItem("cards");
  const parsedCards = JSON.parse(cards) || [];
  for (let i = 0; i < parsedCards.length; i++) {
    if (parsedCards[i][2] === card[2]) {
      parsedCards.splice(i, 1);
      localStorage.setItem("cards", JSON.stringify(parsedCards));
    }
  }
}
