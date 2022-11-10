class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.isSixNumber(numbers);
    this.isUniqueNumber(numbers);
  }

  isSixNumber(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 입력 숫자가 6개가 아님");
  }

  isUniqueNumber(numbers) {
    if (new Set(numbers).size !== 6)
      throw new Error("[ERROR] 겹치는 숫자 존재");
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
