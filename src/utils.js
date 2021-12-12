import { coinChargeInputValue } from './controller/vending-machine-charge/input-validator.js';

export const getRandomCoins = () => {
  const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

  return randomCoin;
};

export const getRandomCoinsAmongList = (money) => {
  const coinList = { 500: 0, 100: 0, 50: 0, 10: 0 };

  while (money) {
    const coin = getRandomCoins();
    if (money - coin < 0) continue;

    money -= coin; // 빼준 coin number ++
    coinList[coin]++;
  }
  console.log(coinList);
  return coinList;
};
