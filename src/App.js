import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const magicCards = [
	{ src: './img/helmet-1.png' },
	{ src: './img/potion-1.png' },
	{ src: './img/ring-1.png' },
	{ src: './img/scroll-1.png' },
	{ src: './img/shield-1.png' },
	{ src: './img/sword-1.png' }
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	const shuffleCards = () => {
		const shuffleCards = [...magicCards, ...magicCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setTurns(0);
		setCards(shuffleCards);
	};

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard
						handleClick={() => handleChoice(card)}
						key={card.id}
						{...card}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
