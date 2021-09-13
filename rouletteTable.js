class RouletteTable {
  constructor() {
    this.roulette = {
      "00": "g",
      0: "g",
      1: "r",
      2: "b",
      3: "r",
      4: "b",
      5: "r",
      6: "b",
      7: "r",
      8: "b",
      9: "r",
      10: "b",
      11: "b",
      12: "r",
      13: "b",
      14: "r",
      15: "b",
      16: "r",
      17: "b",
      18: "r",
      19: "r",
      20: "b",
      21: "r",
      22: "b",
      23: "r",
      24: "b",
      25: "r",
      26: "b",
      27: "r",
      28: "b",
      29: "b",
      30: "r",
      31: "b",
      32: "r",
      33: "b",
      34: "r",
      35: "b",
      36: "r",
    };

    this.bets = {
      firstDozen: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      secondDozen: [
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
      ],
      thirdDozen: [
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
      ],
      red: "r",
      black: "b",
      even: "even",
      odd: "odd",
      firstColumn: [
        "1",
        "4",
        "7",
        "10",
        "13",
        "16",
        "19",
        "22",
        "25",
        "28",
        "31",
        "34",
      ],
      secondColumn: [
        "2",
        "5",
        "8",
        "11",
        "14",
        "17",
        "20",
        "23",
        "26",
        "29",
        "32",
        "35",
      ],
      thirdColumn: [
        "3",
        "6",
        "9",
        "12",
        "15",
        "21",
        "24",
        "27",
        "30",
        "33",
        "36",
      ],
      high: [
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
      ],
      low: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
      ],
      singleNum: Object.keys(this.roulette),
    };

    this.betsPayout = {
      dozen: 2,
      color: 1,
      even_odd: 1,
      column: 2,
      highLow: 1,
      singleNum: 35,
    };
  }
  spinRoulette() {
    const index = Math.floor(Math.random() * Object.keys(this.roulette).length);
    const num = Object.keys(this.roulette)[index];
    const color = this.roulette[num];
    console.log(num);
    return { num, color };
  }

  calculatePayout(betAmount, payout) {
    const betPayout = this.betsPayout[payout];
    return betPayout * betAmount;
  }

  checkWin(betAmount, bet, num, color) {
    if (
      (bet === "red" && color === "r") ||
      (bet === "black" && color === "b")
    ) {
      return this.calculatePayout(betAmount, "color");
    }
    if (bet === "even_odd" && (num !== "0" || num !== "00")) {
      return this.calculatePayout(betAmount, "even_odd");
    }
    if (bet === num) {
      return this.calculatePayout(betAmount, "singleNum");
    }
    if (bet === "low") {
      const check = this.bets.low.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "highLow");
      }
    }
    if (bet === "high") {
      const check = this.bets.high.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "highLow");
      }
    }
    if (bet === "firstDozen") {
      const check = this.bets.firstDozen.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "dozen");
      }
    }
    if (bet === "secondDozen") {
      const check = this.bets.secondDozen.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "dozen");
      }
    }
    if (bet === "thirdDozen") {
      const check = this.bets.thirdDozen.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "dozen");
      }
    }
    if (bet === "firstColumn") {
      const check = this.bets.firstColumn.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "column");
      }
    }
    if (bet === "secondColumn") {
      const check = this.bets.secondColumn.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "column");
      }
    }
    if (bet === "thirdColumn") {
      const check = this.bets.thirdColumn.find((bet) => bet === num);
      if (check) {
        return this.calculatePayout(betAmount, "column");
      }
    }
    return 0;
  }
}

export default RouletteTable;
