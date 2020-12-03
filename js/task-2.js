

const calculateEngravingPrice = function (message, pricePerWord) {
    console.log(`Сообщение:"${message}", цена за слово ${pricePerWord} `)
    const words = message.split(' ');
    const price = words.length * pricePerWord;
    return price;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);