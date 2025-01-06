import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCodeCanvas from qrcode.react
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.downloadUrl); // Set the download URL from the response
      }
    };
    getFile();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo"> 
          <QrCodeScannerIcon  /><h4>SnapShare</h4>
        </div>
        <h1>Simple File Sharing!</h1>

        <button onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result && (
          <div>
            
            
            <div className={`qr-container ${result ? 'visible' : ''}`}>
              <p>Scan to Download:</p>
              <QRCodeCanvas value={result} size={200} /> {/* Generate QR code */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
