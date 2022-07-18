import _ from 'lodash';

const stylishValue = (someValue) => {
  if (_.isObject(someValue) || _.isArray(someValue)) {
    return '[complex value]';
  }
  if (someValue === 'true' || someValue === 'false' || someValue === 'null' || _.isNumber(someValue)) {
    return someValue;
  }
  return `'${someValue}'`;
};

export default (object) => {
  const iter = (data, acc) => {
    if (!_.isObject(data) && !_.isArray(data)) {
      return `${data}`;
    }

    const { value: nestedValue } = data;

    const result = nestedValue.map((item) => {
      const { type, key, value } = item;

      const currentKey = acc.concat(`${key}`);
      const resultString = 'Property ';

      switch (type) {
        case 'nested':
          return iter(value, `${currentKey}.`);
        case 'same':
          return '';
        case 'different':
          return resultString.concat(`'${currentKey}' was updated. From ${stylishValue(value[0])} to ${stylishValue(value[1])}`);
        case 'added':
          return resultString.concat(`'${currentKey}' was added with value: ${stylishValue(value)}`);
        case 'deleted':
          return resultString.concat(`'${currentKey}' was removed`);
        default:
          throw new Error('ошибка чтения типа children');
      }
    });
    return result.filter((shit) => shit !== '').join('\n');
  };
  return iter(object, '');
};
