<script lang="ts">
	export let score: number;
	export let highScore: number;

	$: scorePercentage = Math.min((score / highScore) * 100, 100);
	$: scorePercentageClass = `w-[${scorePercentage}%]`;

	$: {
		console.log(scorePercentageClass);
	}
</script>

<div class="w-full h-8 p-2 border-2 rounded-full mb-4">
	<!-- Inner progress bar -->
	<div class="bg-gray-200 h-full w-full rounded-full">
		<div class={`rounded-full bg-green-500  h-full`} style="width: {scorePercentage}%" />
	</div>
</div>
