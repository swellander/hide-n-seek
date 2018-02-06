var qr = require('qr-image');

var qr_svg = qr.image('hey there WHOOOOOOOO!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
