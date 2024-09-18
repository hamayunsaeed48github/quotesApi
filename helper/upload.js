const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dinu8yz2q',
  api_key: '357458119374399',
  api_secret: '4iNKj83MiysMpOdedJkkyRz5AUA',
  secure: true,
});

const uploadFile = async (filepath) =>{
    console.log(filepath)
    try {
        const result = await cloudinary.uploader.upload(filepath);
        console.log('Cloudinary upload result:', result); // Log the result to see if secure_url exists
        return result;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error.message);
    }
}

module.exports ={
    uploadFile
}