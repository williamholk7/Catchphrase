const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "#FAF9F6",
                    height: '80%',
                    width: '80%',
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #555",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;