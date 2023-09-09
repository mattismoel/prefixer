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

<div class="w-96 border-2 border-dark bg-background text-dark flex flex-col pt-8 mb-2">
	<h2 class="text-center mb-4 text-xl font-semibold">What is {from} in {to}?</h2>
	<div class="flex h-16 text-lg justify-center gap-2 mb-4">
		<span class="self-center">{number.toFixed(2)} {from} * 10</span>
		<input
			type="number"
			class="h-8 w-8 border-2 text-center border-dark bg-secondary text-xs"
			bind:value={guessVal}
		/>
		<span class="self-center">{to}</span>
	</div>
	<div class="grid grid-cols-2 bg-dark pt-[2px] gap-[2px]">
		<Button on:click={() => dispatch('reset')}>Reset</Button>
		<Button on:click={() => dispatch('guess', { guessVal })}>Guess</Button>
		<!-- <button on:click={() => dispatch('reset')}>Reset</button> -->
		<!-- <button on:click={() => dispatch('guess', { guessVal })}>Guess</button> -->
	</div>
</div>
