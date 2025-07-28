import ReactDom from 'react-dom';
interface ModalProps {
	children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalProps) => {
	const el = document.getElementById('modal');
	if (!el) return null;
	return ReactDom.createPortal(children, el);
};
export default ModalPortal;
