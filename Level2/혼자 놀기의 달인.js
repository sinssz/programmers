function solution(cards) {
  if (cards.length === 2) return cards[0] * cards[1];
  let usedCards = [];
  const sizeResult = [];

  for (let i = 0; i < cards.length; i++) {
    let boxNum = i;
    let cardNum = cards[boxNum];

    const boxArr = [];
    const cardArr = [];

    boxArr.push(boxNum);
    if (usedCards.includes(cardNum)) continue;
    cardArr.push(cardNum);
    while (true) {
      boxNum = cardNum - 1;
      cardNum = cards[boxNum];
      console.log(boxNum, cardNum, usedCards, usedCards.includes(cardNum));
      if (boxArr.includes(boxNum)) break;
      if (usedCards.includes(cardNum)) break;

      boxArr.push(boxNum);
      cardArr.push(cardNum);
      usedCards.push(cardNum);
    }
    sizeResult.push(cardArr.length);
  }
  console.log(sizeResult);
  const [max1, max2] = sizeResult.sort((a, b) => b - a);

  return max1 * max2;
}

solution([3, 1, 2]);
