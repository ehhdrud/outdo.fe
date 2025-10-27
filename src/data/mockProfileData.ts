export interface ProfileData {
	user_pk: number;
	name: string;
	email: string;
	bio: string;
}

export const mockProfileData: ProfileData = {
	user_pk: 1,
	name: 'Denny',
	email: 'denny@example.com',
	bio: 'Developer who loves gym',
};
