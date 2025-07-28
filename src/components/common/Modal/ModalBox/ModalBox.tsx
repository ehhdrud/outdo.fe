import { useRef } from 'react';

import CloseIcon from '@/components/Icon/CloseIcon';

import * as S from './style';

interface ModalShareProps {
	onClick?: (bool: boolean) => void;
	isCloseButton?: boolean;
	title?: string;
	children?: React.ReactNode;
}
const ModalBox = ({ onClick, title, children, isCloseButton }: ModalShareProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const handleContainerClick = (e: React.MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			if (onClick) {
				onClick(false);
			}
		}
	};

	return (
		<S.ModalShareContainer onClick={handleContainerClick}>
			<S.ModalShareBox ref={modalRef}>
				{(title || isCloseButton) && (
					<S.ModalShareHeader>
						{title && <h4 className="title">{title}</h4>}
						{isCloseButton && onClick && (
							<S.CloseButton type="button" onClick={() => onClick(false)}>
								<CloseIcon />
							</S.CloseButton>
						)}
					</S.ModalShareHeader>
				)}

				<S.ModalShareContent>{children}</S.ModalShareContent>
			</S.ModalShareBox>
		</S.ModalShareContainer>
	);
};
export default ModalBox;
