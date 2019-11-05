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
