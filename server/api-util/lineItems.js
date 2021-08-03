const { calculateQuantityFromHours, calculateTotalFromLineItems } = require('./lineItemHelpers');
const { types } = require('sharetribe-flex-sdk');
const { Money } = types;

// This bookingUnitType needs to be one of the following:
// line-item/night, line-item/day or line-item/units
const bookingUnitType = 'line-item/units';
const PROVIDER_COMMISSION_PERCENTAGE = -10;

/** Returns collection of lineItems (max 50)
 *
 * Each line items has following fields:
 * - `code`: string, mandatory, indentifies line item type (e.g. \"line-item/cleaning-fee\"), maximum length 64 characters.
 * - `unitPrice`: money, mandatory
 * - `lineTotal`: money
 * - `quantity`: number
 * - `percentage`: number (e.g. 15.5 for 15.5%)
 * - `seats`: number
 * - `units`: number
 * - `includeFor`: array containing strings \"customer\" or \"provider\", default [\":customer\"  \":provider\" ]
 *
 * Line item must have either `quantity` or `percentage` or both `seats` and `units`.
 *
 * `includeFor` defines commissions. Customer commission is added by defining `includeFor` array `["customer"]` and provider commission by `["provider"]`.
 *
 * @param {Object} listing
 * @param {Object} bookingData
 * @returns {Array} lineItems
 */
exports.transactionLineItems = (listing, bookingData) => {
  const unitPrice = listing.attributes.price;
  const { startDate, endDate } = bookingData;

  var discountRate = -100;
  // if (unitPrice.amount > 3500) {
  //   discountRate = -100;
  // } else {
  //   discountRate = -40;
  // }

  /**
   * If you want to use pre-defined component and translations for printing the lineItems base price for booking,
   * you should use code line-item/units
   *
   * Pre-definded commission components expects line item code to be one of the following:
   * 'line-item/provider-commission', 'line-item/customer-commission'
   *
   * By default BookingBreakdown prints line items inside LineItemUnknownItemsMaybe if the lineItem code is not recognized. */

  const booking = {
    code: bookingUnitType,
    unitPrice,
    quantity: calculateQuantityFromHours(startDate, endDate),
    includeFor: ['customer', 'provider'],
  };

  const providerCommission = {
    code: 'line-item/provider-commission',
    unitPrice: calculateTotalFromLineItems([booking]),
    percentage: PROVIDER_COMMISSION_PERCENTAGE,
    includeFor: ['provider'],
  };

  var discountedMoney = 10;
  if (calculateQuantityFromHours(startDate, endDate) <= 3) {
    discountedMoney = new Money(0, "NOK")
  } else if (calculateQuantityFromHours(startDate, endDate) > 3 && calculateQuantityFromHours(startDate, endDate) <= 30) {
    discountedMoney = new Money(((calculateQuantityFromHours(startDate, endDate) * unitPrice.amount) - (4 * unitPrice.amount)), "NOK")
  } else if (calculateQuantityFromHours(startDate, endDate) > 30 && calculateQuantityFromHours(startDate, endDate) <= 54) {
    discountedMoney = new Money(((calculateQuantityFromHours(startDate, endDate) * unitPrice.amount) - (8 * unitPrice.amount)), "NOK")
  } else if (calculateQuantityFromHours(startDate, endDate) > 54 && calculateQuantityFromHours(startDate, endDate) <= 78) {
    discountedMoney = new Money(((calculateQuantityFromHours(startDate, endDate) * unitPrice.amount) - (12 * unitPrice.amount)), "NOK")
  } else if (calculateQuantityFromHours(startDate, endDate) > 78 && calculateQuantityFromHours(startDate, endDate) <= 200) {
    discountedMoney = new Money(((calculateQuantityFromHours(startDate, endDate) * unitPrice.amount) - (16 * unitPrice.amount)), "NOK")
  } else if (calculateQuantityFromHours(startDate, endDate) > 200) {
    discountedMoney = new Money(((calculateQuantityFromHours(startDate, endDate) * unitPrice.amount) - (24 * unitPrice.amount)), "NOK")
  }

  const timeDiscount = {
    code: 'line-item/coupon-discount',
    //unitPrice: calculateQuantityFromHours(startDate, endDate) > 7 ? new Money(2000, "NOK") : new Money(4000, "NOK"),
    //unitPrice: new Money(50000, "NOK"),
    unitPrice: discountedMoney,
    percentage: discountRate,
    includeFor: ['customer', 'provider'],
  };

  const lineItems = [booking, providerCommission, timeDiscount];
  //const lineItems = [booking, providerCommission];
  //console.log(calculateQuantityFromHours(startDate, endDate));
  //console.log(unitPrice.amount);
  return lineItems;
};
