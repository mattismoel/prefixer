<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button class="py-2 px-4 border-2 rounded-sm" on:click={() => dispatch('click')}>
	<slot />
</button>
