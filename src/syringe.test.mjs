import { inject } from './syringe';
import jestConfig from '../jest.config';

describe('inject', () => {
    let scriptObject, appendSpy;

    beforeEach(() => {
        expect.hasAssertions();
        appendSpy = jest.spyOn(document.head, 'appendChild');
    });

    it('should inject the script into the HEAD', () => {
        // Arrange
        scriptObject = { src: 'foo/bar.js' };
        window.setTimeout(() => {
            const script = appendSpy.mock.calls[0][0];
            script.onload();
        }, 100)

        // Act
        return inject(scriptObject).then(() => {
            // Assert
            expect(document.head.querySelectorAll('script[src="foo/bar.js"]').length).toBeTruthy();
        });

    });

    it('should handle multiple scrits', () => {
        // Arrange
        const scripts = [{ src: 'foo/bar' }, { src: 'foo/baz' }];
        appendSpy.mockClear();
        window.setTimeout(() => {
            appendSpy.mock.calls.forEach((call) => {
                const script = call[0];
                script.onload();
            });
        }, 10);

        // Act
        return inject(scripts).then(() => {
            // Assert
            expect(appendSpy).toHaveBeenCalledTimes(2);
        });

    });
});