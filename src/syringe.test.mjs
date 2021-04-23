import { inject } from './syringe';

describe('inject', () => {
    let scriptObject, appendSpy;

    beforeEach(() => {
        expect.hasAssertions();
        appendSpy = jest.spyOn(document.head, 'appendChild');
        // window.setTimeout(() => {
        //     const script = appendSpy.mock.calls[0][0];
        //     script.onload();
        // }, 100)
    });

    it('should inject the script into the HEAD', () => {
        // Arrange
        scriptObject = { src: 'foo/bar.js' };

        // Act
        inject(scriptObject);

        // Assert
        expect(document.head.querySelectorAll('script[src="foo/bar.js"]').length).toBeTruthy();

    });

    it('should handle multiple scrits', () => {
        // Arrange
        const scripts = [{ src: 'foo/bar' }, { src: 'foo/baz' }];
        appendSpy.mockClear();

        // Act
        inject(scripts)

        // Assert
        expect(appendSpy).toHaveBeenCalledTimes(2);

    });
});