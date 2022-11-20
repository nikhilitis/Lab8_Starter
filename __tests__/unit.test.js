// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('Checks whether 0-123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('0-123-456-7890')).toBe(true);
});

test('Checks whether 911 is a phone number', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
});

test('Checks whether 1-111-111-1111 is a phone number', () => {
    expect(functions.isPhoneNumber('1-111-111-1111')).toBe(true);
});

test('Checks whether 12345 is a phone number', () => {
    expect(functions.isPhoneNumber('12345')).toBe(false);
});


// matches valid emails
test('Checks whether nrao@ucsd.edu is an email', () => {
    expect(functions.isEmail('nrao@ucsd.edu')).toBe(true);
});

test('Checks whether hello@gmail.com is an email', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('Checks whether cse110student@gmail.education is an email', () => {
    expect(functions.isEmail('cse110student@gmail.education')).toBe(false);
});

test('Checks whether cse110student is an email', () => {
    expect(functions.isEmail('cse110student')).toBe(false);
});


/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('Checks whether cse110student is a strong password', () => {
    expect(functions.isStrongPassword('cse110student')).toBe(true);
});

test('Checks whether tigerstripes_12 is a strong password', () => {
    expect(functions.isStrongPassword('tigerstripes_12')).toBe(true);
});

test('Checks whether abc is a strong password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('Checks whether passwordthatistoolongforthisfunction is a strong password', () => {
    expect(functions.isStrongPassword('passwordthatistoolongforthisfunction')).toBe(false);
});


// This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('Checks whether 11/20/2022 is a date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('Checks whether 1/2/2001 is a date', () => {
    expect(functions.isDate('1/2/2001')).toBe(true);
});

test('Checks whether 1 / 2 / 2001 is a date', () => {
    expect(functions.isDate('1 / 2 / 2001')).toBe(false);
});

test('Checks whether 2022/11/20 is a date', () => {
    expect(functions.isDate('2022/11/20')).toBe(false);
});


// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('Checks whether #123456 is a hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('Checks whether #FFFFFF is a hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Checks whether #1234561 is a hex color', () => {
    expect(functions.isHexColor('#1234561')).toBe(false);
});

test('Checks whether #abcd is a hex color', () => {
    expect(functions.isHexColor('#abcd')).toBe(false);
});