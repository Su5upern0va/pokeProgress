<script lang="ts">
	import { enhance } from '$app/forms'
	let { form } = $props()
</script>

<h1>Registration</h1>

<form action="?/register" method="POST" use:enhance>
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	{#if form?.user}
		<p class="error">Username is already taken.</p>
	{/if}

	<button type="submit">Register</button>
</form>
