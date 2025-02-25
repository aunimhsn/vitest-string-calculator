import { describe, expect, it } from 'vitest'
import { add } from '../js/main.js'


describe('test of the function add()', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0)
    })

    it('returns 1 for "1"', () => {
        expect(add('1')).toBe(1)
    })

    it('returns 3 for "1,2"', () => {
        expect(add('1,2')).toBe(3)
    })

    it('returns 8 for "1,2,5"', () => {
        expect(add('1,2,5')).toBe(8)
    })

    it('returns 8 for "1\n2,5"', () => {
        expect(add('1\n2,5')).toBe(8)
    })

    it('returns error for "1,\n"', () => {
        expect(() => add('1,\n')).toThrow('Invalid input')
    })
    
    it('for //;\n1;2 returns 3', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    it('for //a\n1a2 returns 3', () => {
        expect(add('//a\n1a2')).toBe(3);
    });

    it('returns Exception for -2', () => {
        expect(() => add('-2')).toThrow('Negatives not allowed. [-2]');
    });

    it('returns Exception for -2, -4', () => {
        expect(() => add('-2,-4')).toThrow('Negatives not allowed. [-2,-4]');
    });

    it('returns 8 for "1\n2,5,1004"', () => {
        expect(add('1\n2,5,1004')).toBe(8)
    })

    it('returns 6 for "//[***]\n1***2***3"', () => {
        expect(add('//[***]\n1***2***3')).toBe(6)
    })

    it('returns 6 for "//[***][%%]\n1***2%%3"', () => {
        expect(add('//[***][%%]\n1***2%%3')).toBe(6)
    })
});