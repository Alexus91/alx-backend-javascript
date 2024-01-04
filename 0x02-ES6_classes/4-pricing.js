import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = newCurrency;
  }

  //  display full price
  displayFullPrice() {
    const { _amount, _currency } = this;
    return `${_amount} ${_currency.name} (${_currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
