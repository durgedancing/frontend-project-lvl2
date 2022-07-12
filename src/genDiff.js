import buildTree from './buildTree.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const tree = buildTree(filepath1, filepath2);
  switch (style) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    default:
      break;
  }
  return '';
};

export default genDiff;
