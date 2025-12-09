// @vitest-environment jsdom

import { inject } from './syringe';
import { expect, describe, it, beforeEach, vi } from 'vitest';

describe('inject', () => {
    let scriptObject, appendSpy;

    beforeEach(() => {
        expect.hasAssertions();
        appendSpy = vi.spyOn(document.head, 'appendChild');
    });

    it('should inject the script into the HEAD', () => {
        // Arrange
        scriptObject = { src: 'foo/bar.js' };

        // Act
        inject(scriptObject);

        // Assert
        expect(document.head.querySelectorAll('script[src="foo/bar.js"]').length).toBeTruthy();

    });

    it('should handle multiple scripts', () => {
        // Arrange
        const scripts = [{ src: 'foo/bar' }, { src: 'foo/baz' }];
        appendSpy.mockClear();

        // Act
        inject(scripts)

        // Assert
        expect(appendSpy).toHaveBeenCalledTimes(2);
    });

    it('should throw an error if unknown attributes are detected', () => {
        // Arrange
        const scripts = [{ src: 'foo/bar', onLord: vi.fn() }];

        // Act
        // Assert
        expect(() => {
            inject(scripts);
        }).toThrow(/Unsupported attribute/);
    });
});