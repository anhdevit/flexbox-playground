const fs = require('fs');
const imageFileNames = () => {
  const array = fs
    .readdirSync('src/resources/assets/common')
    .filter((file: string) => {
      return file.endsWith('.png');
    })
    .map((file: string) => {
      return file
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('.png', '');
    });
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      return `${name}: require('../common/${name}.png')`;
    })
    .join(',\n  ');
  const string = `const image = {
        ${properties}
    }
    export default images
    `;
  fs.writeFileSync('src/resources/assets/common/icons.js', string, 'utf8');
};
generate();
