const fieldNames = ['workshops', 'seminars', 'conferences','journals'];

const fieldsConfig = fieldNames.reduce((obj, fieldName) => {
  obj[fieldName] = {maxCount : Infinity};
  return obj;
}, {});
const fieldsConfiguration = Object.keys(fieldsConfig).map(fieldName => ({ name: fieldName, maxCount: fieldsConfig[fieldName] }))
module.exports = {fieldsConfiguration}