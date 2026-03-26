const fs = require('fs');
function readDimensions(file) {
  const buffer = fs.readFileSync(file);
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`${file} => w: ${width}, h: ${height}`);
}
readDimensions('client/src/assets/images/hero-image1.png');
readDimensions('client/src/assets/images/ourbusinesses-1.png');
