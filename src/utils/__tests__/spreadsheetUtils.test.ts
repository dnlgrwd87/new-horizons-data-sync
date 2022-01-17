import { convertKeyToCamelCase, parseImageUrl } from '../spreadsheetUtils';

describe('convertKeyToCamelCase', () => {
    it('converts a string to camel case', () => {
        const str = 'I Will Be Camel Case';
        const expected = 'iWillBeCamelCase';

        const res = convertKeyToCamelCase(str);

        expect(res).toEqual(expected);
    });
});

describe('parseImageUrl', () => {
    it('should parse the image url from the provided value', () => {
        const value = '=IMAGE("https://myImage.png")';
        const expected = 'https://myImage.png';

        const res = parseImageUrl(value);

        expect(res).toEqual(expected);
    });
});
