SnapShare

SnapShare is a simple file-sharing application that allows users to upload files and share them through a downloadable link or a QR code. This project is built using the MERN stack and utilizes AWS S3 for file storage. The application is deployed on Vercel.

Live Demo

Access the live application here: https://snap-share-gold.vercel.app

Features

Upload files and Generate a QR code for easy file sharing.

Responsive and user-friendly UI.

Technologies Used

Frontend

	React

	Axios

	QR Code generation library (qrcode.react)

Backend

	Express.js

	AWS S3 (via @aws-sdk/client-s3)

	Multer-S3 for file uploads

Deployment

	Vercel


Getting Started

Follow these steps to set up and run the project locally.

Prerequisites

Ensure you have the following installed:

	Node.js

	NPM or Yarn

Backend Setup

Clone the repository:

	git clone <repository-url>
	d <repository-folder>/backend

Install dependencies:

	npm install

Configure environment variables:
	Create a .env file in the backend directory with the following:

AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
AWS_BUCKET_NAME=your-bucket-name
PORT=8000

Start the backend server:

	npm start

Frontend Setup

	Navigate to the frontend folder:

	cd <repository-folder>/frontend

Install dependencies:

	npm install

Configure environment variables:
Add the following to .env in the frontend directory:

	REACT_APP_API_URI=https://snap-share-backend.vercel.app

Start the frontend application:

	npm start

Deploying on Vercel

Backend:
	
	Push the backend code to a GitHub repository.

	Connect the repository to Vercel and set the environment variables in Vercel settings.

Frontend:

	Push the frontend code to a GitHub repository.

	Connect the repository to Vercel and set the environment variable REACT_APP_API_URI.

File Structure

Backend

	server.js: Entry point for the backend server.

	api/file.js: API routes for file upload and management.

	controller/filecontroller.js: Logic for handling file uploads.

	utils/uploads.js: Configuration for Multer-S3 and AWS S3 client.

Frontend

	App.js: Main application component.

	service/api.js: Handles API requests to the backend.

	App.css: Styles for the application.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

Thank you for checking out SnapShare! Feel free to explore the live app and share files effortlessly.
