import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the S3 client from AWS SDK v3
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (request, response) => {
  try {
    const file = request.file;  // File uploaded using multer-s3
    const fileUrl = file.location; // Public URL of the uploaded file

    // Generate a presigned URL for the file to be downloaded
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.key,  // Key of the uploaded file
    });

    // Generate the presigned URL that allows downloading
    const downloadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // Link expires in 1 hour

    // Respond with the public URL and the presigned download URL
    response.status(200).json({
      message: 'File uploaded successfully!',
      fileUrl: fileUrl,  // Public URL of the file
      downloadUrl: downloadUrl,  // Presigned URL for downloading the file
    });
  } catch (error) {
    console.error('Error while uploading file:', error.message);
    response.status(500).json({ error: error.message });
  }
};
