<script lang="ts">
	import InputPrompt from '$lib/components/InputPrompt.svelte';
	import ScoreBar from '$lib/components/ScoreBar.svelte';
	import { prefixes } from '$lib/prefixes';
	import { highScore, score } from '$lib/stores/score';
	import type { Question, SIPrefix, SIUnit } from '$lib/types/question';
	import { units } from '$lib/units';

	const getNewQuestion = (): Question => {
		let fromPrefix: SIPrefix;
		let toPrefix: SIPrefix;
		let unit: SIUnit = units[Math.floor(Math.random() * units.length)];

		fromPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
		toPrefix = fromPrefix;

		while (fromPrefix == toPrefix) {
			toPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
		}

		console.log(fromPrefix.exponent - toPrefix.exponent);

		return {
			fromPrefix,
			toPrefix,
			unit
		};
	};

	let question: Question = getNewQuestion();

	const guess = (exponent: number) => {
		console.log(exponent);
		let diff = question.fromPrefix.exponent - question.toPrefix.exponent;

		if (exponent == diff) {
			score.update((prevScore) => prevScore + 1);
			console.log('Win');
		} else {
			reset();
			console.log('Lose');
		}
		question = getNewQuestion();
	};

	const reset = () => {
		if ($score > $highScore) {
			highScore.set($score);
		}
		score.set(0);
		question = getNewQuestion();
	};
</script>

<div class="flex-1 flex items-center justify-center flex-col">
	<div class="flex flex-col">
		<InputPrompt
			{question}
			on:guess={(e) => {
				guess(e.detail.guessVal);
			}}
			on:reset={reset}
		/>
		<ScoreBar score={$score} highScore={$highScore} />
		<div class="w-full flex justify-between">
			<span>Score: {$score}</span>
			<span>Highscore: {$highScore}</span>
		</div>
	</div>
</div>
