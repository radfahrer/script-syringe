import { inject } from './syringe';
import jestConfig from '../jest.config';

describe('inject', () => {
    let scriptObject , appendSpy;

    beforeEach(() => {
        expect.hasAssertions();
        appendSpy = jest.spyOn(document.head, 'appendChild');
    });

    it('should inject the script into the HEAD', () => {
        // Arrange
        scriptObject = { src:'foo/bar.js' };
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
});