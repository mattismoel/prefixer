<script>
	import '../app.postcss';
</script>

<nav
	class="flex items-center justify-center h-16 border-b-2 bg-primary text-background border-dark"
>
	<ul class="flex gap-8">
		<li><a href="/">Game</a></li>
		<li><a href="/tutorial">How to play</a></li>
	</ul>
</nav>

<div class="p-12 min-h-[calc(100vh-64px)] flex flex-col shadow-md bg-background">
	<slot />
</div>

<footer class="h-32 flex items-center justify-center flex-col bg-background">
	<h2 class="">Prefixer by Mattis Møl Kristensen</h2>
	<span>2023</span>
</footer>
