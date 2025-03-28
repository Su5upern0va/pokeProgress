import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user.role !== 'ADMIN') {
		redirect(302, '/')
	}
}