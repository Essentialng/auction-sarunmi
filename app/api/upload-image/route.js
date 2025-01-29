import cloudinary from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, 
  },
};

const uploadCoverImage = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './'; 
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form data' });
    }

   
    const filePath = files.file[0].path;

    cloudinary.uploader.upload(filePath, { folder: 'cover_images' }, (cloudinaryError, result) => {
      fs.unlinkSync(filePath);

      if (cloudinaryError) {
        return res.status(500).json({ message: 'Error uploading image to Cloudinary', error: cloudinaryError });
      }

      return res.status(200).json({ imageUrl: result.secure_url });
    });
  });
};

export default uploadCoverImage;
