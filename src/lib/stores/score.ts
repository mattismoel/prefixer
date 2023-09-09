import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let score = writable(0);
export let highScore = writable(
    browser && localStorage.getItem('prefixerScore') ? +localStorage.getItem('prefixerScore')! : 0
);

highScore.subscribe((score) => {
    if (browser) return localStorage.setItem('prefixerScore', score.toString());
});
