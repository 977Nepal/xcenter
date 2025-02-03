const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
          </div>
          <div className="mt-4">{children}</div>
          <div className="mt-4 text-right">
            <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Close</button>
          </div>
        </div>
      </div>
    );
  };

export default Modal;