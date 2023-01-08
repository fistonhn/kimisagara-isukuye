const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'kerapay',
    api_key: '271241112335286',
    api_secret: 'vTczKzbs6KaDBG4bvls3PSVJxw4',
});

module.exports = cloudinary;