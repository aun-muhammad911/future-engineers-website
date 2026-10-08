import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            {toast.type === 'success' && <i className="bi bi-check-circle-fill" style={{ color: '#22c55e' }} />}
            {toast.type === 'info' && <i className="bi bi-info-circle-fill" style={{ color: '#38bdf8' }} />}
            {toast.type === 'error' && <i className="bi bi-exclamation-triangle-fill" style={{ color: '#ef4444' }} />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
