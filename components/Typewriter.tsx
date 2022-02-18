import React, { useState, useEffect } from 'react';
import styles from '../styles/Typewriter.module.scss';

export function calculateBackspaces(from: string, to: string): number {
	let charsInCommonFromStart = 0;

	for (let i = 0; i < from.length; i++) {
		const fromChar = from[i];
		const toChar = to[i];

		if (toChar === fromChar) {
			charsInCommonFromStart += 1;
		} else {
			break;
		}
	}

	return from.length - charsInCommonFromStart;
}

export type TextGeneratorResult = {
	text: string;
	blink: boolean;
};

export function* textGenerator(sentences: string[], loop?: boolean): Generator<TextGeneratorResult> {
	let text = '';

	do {
		for (const sentence of sentences) {
			const backspaces = calculateBackspaces(text, sentence);

			// Now apply the number of backspaces
			for (let i = 0; i < backspaces; i++) {
				text = text.slice(0, -1);

				// Do not blink when typing
				yield { text, blink: false };
			}

			// The tricky bit
			const missingChars = sentence.slice(text.length);

			const missingCharsArray = missingChars.split('');

			for (const missingChar of missingCharsArray) {
				text += missingChar;

				// Do not blink when typing
				yield { text, blink: false };
			}

			// Add a delay between sentences
			const delay = 15;
			for (let i = 0; i < delay; i++) {
				// Blink when not typing
				yield { text, blink: true };
			}
		}
	} while (loop);
}

type TypewriterProps = {
	words: string[];
	loop?: boolean;
};

const Typewriter = (props: TypewriterProps) => {
	const [{ text, blink }, setResult] = useState<TextGeneratorResult>(() => ({
		text: '',
		blink: false,
	}));

	useEffect(() => {
		const generator = textGenerator(props.words, props.loop);

		const interval = window.setInterval(() => {
			const { value, done } = generator.next();

			if (done) {
				window.clearInterval(interval);
			} else {
				setResult(value);
			}
		}, 100);

		return () => {
			window.clearInterval(interval);
		};
	}, [props.loop, props.words]);

	return (
		<>
			{text}
			<span className={`${blink ? styles.blink : ''}`}>_</span>
		</>
	);
};

export default Typewriter;
