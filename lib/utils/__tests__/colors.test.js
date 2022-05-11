import { hexToRgb, rgbToHex, rgbTox255 } from '../colors';

describe('colors', () => {
  describe('hexToRgb', () => {
    const color1 = '#fafbfc';
    const color2 = '#2a2a2a';
    const color3 = '#2a2a';
    const expectedResult1 = [250, 251, 252];
    const expectedResult2 = [42, 42, 42];
    const expectedResult3 = new Error('Invalid hex color');

    it(`${color1} should convert to ${JSON.stringify(
      expectedResult1
    )}`, async () => {
      expect(hexToRgb(color1)).toEqual(expectedResult1);
    });

    it(`${color2} should convert to ${JSON.stringify(
      expectedResult2
    )}`, async () => {
      expect(hexToRgb(color2)).toEqual(expectedResult2);
    });

    it(`${color3} should return '${expectedResult3}'`, async () => {
      try {
        hexToRgb(color3);
      } catch (error) {
        expect(error).toEqual(expectedResult3);
      }
    });
  });

  describe('rgbToHex', () => {
    const color1 = [250, 251, 252];
    const color2 = [42, 42, 42];
    const color3 = [42];
    const expectedResult1 = '#fafbfc';
    const expectedResult2 = '#2a2a2a';
    const expectedResult3 = new Error('Invalid rgb color');

    it(`${JSON.stringify(
      color1
    )} should convert to ${expectedResult1}`, async () => {
      expect(rgbToHex(color1[0], color1[1], color1[2])).toEqual(
        expectedResult1
      );
    });

    it(`${JSON.stringify(
      color2
    )} should convert to ${expectedResult2}`, async () => {
      expect(rgbToHex(color2[0], color2[1], color2[2])).toEqual(
        expectedResult2
      );
    });

    it(`${JSON.stringify(
      color3
    )} should return '${expectedResult3}'`, async () => {
      try {
        rgbTox255(color3);
      } catch (error) {
        expect(error).toEqual(expectedResult3);
      }
    });
  });

  describe('rgbTox255', () => {
    const color1 = [250, 251, 252];
    const color2 = [42, 42, 42];
    const color3 = [42];
    const expectedResult1 = 231;
    const expectedResult2 = 235;
    const expectedResult3 = new Error('Invalid rgb color');

    it(`${JSON.stringify(
      color1
    )} should convert to ${expectedResult1}`, async () => {
      expect(rgbTox255(color1)).toEqual(expectedResult1);
    });

    it(`${JSON.stringify(
      color2
    )} should convert to ${expectedResult2}`, async () => {
      expect(rgbTox255(color2)).toEqual(expectedResult2);
    });

    it(`${JSON.stringify(
      color3
    )} should return '${expectedResult3}'`, async () => {
      try {
        rgbTox255(color3);
      } catch (error) {
        expect(error).toEqual(expectedResult3);
      }
    });
  });
});
