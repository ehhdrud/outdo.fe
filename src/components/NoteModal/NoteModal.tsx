import { useEffect, useState } from 'react';

import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormTextArea from '@/components/common/Form/FormTextArea/FormTextArea';
import ModalPortal from '@/components/common/Modal/ModalPortal/ModalPortal';

import * as S from './NoteModal.style';

interface NoteModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (note: string) => void;
	initialNote?: string;
	workoutName: string;
}

const NoteModal = ({ isOpen, onClose, onSave, initialNote = '', workoutName }: NoteModalProps) => {
	const [note, setNote] = useState(initialNote);

	// initialNote가 변경될 때마다 상태 업데이트
	useEffect(() => {
		setNote(initialNote);
	}, [initialNote]);

	const handleSave = () => {
		onSave(note);
		onClose();
	};

	const handleClose = () => {
		setNote(initialNote);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<ModalPortal>
			<S.ModalOverlay onClick={handleClose}>
				<S.ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
					<S.ModalHeader>
						<S.ModalTitle>{workoutName}</S.ModalTitle>
						<S.CloseButton onClick={handleClose}>×</S.CloseButton>
					</S.ModalHeader>
					<S.ModalBody>
						<FormTextArea label="" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your workout notes here..." rows={6} />
					</S.ModalBody>
					<S.ModalFooter>
						<FormButton variant="secondary" size="small" onClick={handleClose}>
							Cancel
						</FormButton>
						<FormButton size="small" onClick={handleSave}>
							Save Note
						</FormButton>
					</S.ModalFooter>
				</S.ModalContent>
			</S.ModalOverlay>
		</ModalPortal>
	);
};

export default NoteModal;
