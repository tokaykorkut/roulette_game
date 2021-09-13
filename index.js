import RouletteTable from "./rouletteTable.js";
import betEnum from "./bet.enum.js";

const roulette = new RouletteTable();
const { num, color } = roulette.spinRoulette();
console.log({ num, color });
const result = roulette.checkWin(15, betEnum.BLACK, num, color);
console.log(result);
