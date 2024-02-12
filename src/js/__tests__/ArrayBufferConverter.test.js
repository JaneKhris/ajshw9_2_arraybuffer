import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('test ArrayBufferConverter methods', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer(data));
  expect(converter.toString()).toEqual(data);
});
