import {isValidBuffer} from '../index';
import * as fs from 'fs';

const buffer = fs.readFileSync(require.resolve('./data/test.pdf'))
test('ValidityTest', () => {
    expect(isValidBuffer(buffer)).toBe(true);
  });