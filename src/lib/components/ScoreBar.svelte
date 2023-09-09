<script lang="ts">
	export let score: number;
	export let highScore: number;

	$: scorePercentage = Math.min((score / highScore) * 100, 100);
	$: scorePercentageClass = `w-[${scorePercentage}%]`;
	$: shouldHaveBorder = !(scorePercentage == 0 || scorePercentage == 100);
	$: {
		console.log(scorePercentageClass);
	}
</script>

<div class="w-full bg-background h-10 p-2 border-2 mb-4 border-dark">
	<!-- Inner progress bar -->
	<div class="bg-secondary h-full w-full border-dark border-2">
		<div
			class={`
				bg-accent 
				${shouldHaveBorder ? 'border-r-2' : ''} 
				border-dark  
				h-full
			`}
			style="width: {scorePercentage}%"
		/>
	</div>
</div>
