/** @type {(str: string) => string} */
function _(str) {
    let lines = str.split('\n');
    /** @type {string[]} */
    let new_lines = [];
    for (let i = 0; i < lines.length; i++) {
        let chars = lines[i].split('');
        /** @type {string[]} */
        let new_chars = [];
        for (let j = 0; j < chars.length; j++) {
            if (j === 0) {
                new_chars.push(chars[j].toLowerCase());
            }
            else if (/[A-Z]/.test(chars[j])) {
                new_chars.push(`_${chars[j].toLowerCase()}`);
            }
            else {
                new_chars.push(chars[j]);
            }
        }
        new_lines.push(new_chars.join(''));
    }
    return new_lines.join('\n');
}