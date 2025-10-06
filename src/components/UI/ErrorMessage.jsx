import React from 'react';

const ErrorMessage = ({ message, onDismiss }) => (
  <div className="max-w-2xl mx-auto mb-6">
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center justify-between">
      <p className="text-red-700">{message}</p>
      <button 
        onClick={onDismiss}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✕
      </button>
    </div>
  </div>
);

export default ErrorMessage;
