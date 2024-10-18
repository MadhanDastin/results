
"use client"
import React from 'react';

interface PasswordModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Your Password!</h2>
        </div>
        <div className="modal-body">
          {/* Add form or any content here */}
        </div>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-container {
          background: white;
          border-radius: 10px;
          width: 400px;
          padding: 20px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        .modal-header {
          background: linear-gradient(90deg, #0077b6, #00b4d8);
          padding: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          text-align: center;
          color: white;
          font-size: 1.5rem;
        }
        .close-btn {
          margin-top: 20px;
          background-color: #0077b6;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .close-btn:hover {
          background-color: #005f86;
        }
      `}</style>
    </div>
  );
};

export default PasswordModal;
