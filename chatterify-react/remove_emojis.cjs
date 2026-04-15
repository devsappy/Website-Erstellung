const fs = require('fs');

const FILE = 'src/data/blogPosts.js';
let content = fs.readFileSync(FILE, 'utf8');

const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u2600-\u26FF\u2700-\u27BF]/gu;

content = content.replace(emojiRegex, '');

content = content.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([0-9a-fA-F]{4})/g, (match, hex1, hex2) => {
    const hex = hex1 || hex2;
    const charCode = parseInt(hex, 16);
    try {
        const char = String.fromCodePoint(charCode);
        if (/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u2600-\u26FF\u2700-\u27BF]/u.test(char)) {
            return ''; 
        }
    } catch(e) { }
    return match;
});

fs.writeFileSync(FILE, content, 'utf8');
console.log('Removed all emojis');
