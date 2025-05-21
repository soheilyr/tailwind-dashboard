'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!isVisible) {
		return null;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			className="fixed bottom-4 right-4 rounded-full shadow-lg"
			onClick={scrollToTop}
		>
			<ArrowUp className="h-4 w-4" />
			<span className="sr-only">Scroll to top</span>
		</Button>
	);
}
