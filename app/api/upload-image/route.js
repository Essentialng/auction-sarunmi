import cloudinary from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function POST(req) {
  const form = new formidable.IncomingForm();
  form.uploadDir = './';

  // Disable bodyParser manually in the form handler
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(new Response(JSON.stringify({ message: 'Error parsing form data' }), { status: 500 }));
      }

      const filePath = files.file[0].path;

      cloudinary.uploader.upload(filePath, { folder: 'cover_images' }, (cloudinaryError, result) => {
        fs.unlinkSync(filePath);

        if (cloudinaryError) {
          reject(new Response(JSON.stringify({ message: 'Error uploading image to Cloudinary', error: cloudinaryError }), { status: 500 }));
        }

        resolve(new Response(JSON.stringify({ imageUrl: result.secure_url }), { status: 200 }));
      });
    });
  });
}
