<script lang="ts">
	import type { Question } from '$lib/types/question';
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	export let question: Question;
	let guessVal: number;

	let dispatch = createEventDispatcher();
	let number: number;

	$: from = `${question.fromPrefix.short}${question.unit.short}`;
	$: to = `${question.toPrefix.short}${question.unit.short}`;

	$: {
		if (from) number = Math.random() * 10;
	}
</script>

<div class="w-96 border-2 bg-white rounded-md flex flex-col p-8 mb-2">
	<h2 class="text-center mb-4 text-xl font-semibold">What is {from} in {to}?</h2>
	<div class="flex h-16 text-lg justify-center gap-2 mb-4">
		<span class="self-center">{number.toFixed(2)} {from} * 10</span>
		<input type="number" class="h-8 w-8 border-2 text-center rounded-md" bind:value={guessVal} />
		<span class="self-center">{to}</span>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<Button on:click={() => dispatch('reset')}>Reset</Button>
		<Button on:click={() => dispatch('guess', { guessVal })}>Guess</Button>
		<!-- <button on:click={() => dispatch('reset')}>Reset</button> -->
		<!-- <button on:click={() => dispatch('guess', { guessVal })}>Guess</button> -->
	</div>
</div>
