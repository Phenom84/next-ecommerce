import ProductItem from '../components/ProductItem.jsx';

describe('ProductItem', () => {
  test('ProductItem should exist and to be typeof function', () => {
    expect(ProductItem).toBeDefined();
    expect(typeof ProductItem).toBe('function');
  });
});
