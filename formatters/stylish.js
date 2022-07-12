import _ from 'lodash';
// export default (result) => `{\n${result.map((line) => `  ${line}`).join('\n')}\n}`;

export default (data, replacer = '  ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const currentCount = depth * spacesCount;
    const end = replacer.repeat(currentCount - spacesCount);

    const { value: nestedValue } = currentValue;

    /* if (!_.isObject(value)) {
      return `${currentValue}`;
    } */

    const resultArray = nestedValue.map((item) => {
      switch (item.type) {
        case 'nested':
          return `${replacer.repeat(currentCount)}  ${item.key}: ${iter(item.value, depth + 2)}`;
        case 'same':
          return `${replacer.repeat(currentCount)}  ${item.key}: ${item.value}`;
        case 'different':
          return `${replacer.repeat(currentCount)}- ${item.key}: ${iter(item.value[0], depth + 2)}\n${replacer.repeat(currentCount)}+ ${item.key}: ${iter(item.value[1], depth + 2)}`;
        case 'added':
          return `${replacer.repeat(currentCount)}+ ${item.key}: ${iter(item.value, depth + 2)}`;
        case 'deleted':
          return `${replacer.repeat(currentCount)}- ${item.key}: ${iter(item.value, depth + 2)}`;
        default:
          break;
      }
      return '';
    });
    const stylishData = ['{', ...resultArray, `${end}}`].join('\n');
    return stylishData;
  };
  return iter(data, 1);
};
