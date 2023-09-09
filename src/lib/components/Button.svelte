<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button
	class="py-2 px-4 bg-primary text-background font-semibold hover:brightness-90"
	on:click={() => dispatch('click')}
>
	<slot />
</button>
