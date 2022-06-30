import buildTree from './buildTree.js';
import stylish from './stylish.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const tree = buildTree(filepath1, filepath2);
  switch (style) {
    case 'smf':
      // do nothing;
      break;
    default:
      break;
  }
  return stylish(tree);
};

export default genDiff;
