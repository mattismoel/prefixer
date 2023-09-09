<script>
	import '../app.postcss';
</script>

<nav class="flex items-center justify-center h-16 border-b-2">
	<ul class="flex gap-8">
		<li><a href="/">Game</a></li>
		<li><a href="/tutorial">How to play</a></li>
	</ul>
</nav>

<div class="p-12 min-h-[calc(100vh-64px)] flex flex-col shadow-md">
	<slot />
</div>

<footer class="h-64 flex items-center justify-center">
	<h1 class="text-xl">Prefixer</h1>
</footer>
