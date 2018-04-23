import { DATA_AVAILABLE } from './types';

const getData = () => {
  const data = [
    'React Native', 'Redux', 'React Navigation', 'Jest', 'Flow', 'ESLint', 'Shoutem UI', 'Vector Icons',
  ];
  return {
    type: DATA_AVAILABLE,
    payload: data,
  };
};

export { getData };
