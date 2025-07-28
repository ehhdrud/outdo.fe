import ReactDom from 'react-dom';
interface ToastProps {
	children: React.ReactNode;
}

const ToastPortal = ({ children }: ToastProps) => {
	const el = document.getElementById('toast');
	if (!el) return null;
	return ReactDom.createPortal(children, el);
};
export default ToastPortal;
