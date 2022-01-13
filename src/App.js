import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const magicCards = [
	{ src: './img/helmet-1.png', matched: false },
	{ src: './img/potion-1.png', matched: false },
	{ src: './img/ring-1.png', matched: false },
	{ src: './img/scroll-1.png', matched: false },
	{ src: './img/shield-1.png', matched: false },
	{ src: './img/sword-1.png', matched: false }
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const [cardOne, setCardOne] = useState(null);
	const [cardTwo, setCardTwo] = useState(null);

	// shuffle cards for new game
	const shuffleCards = () => {
		const shuffleCards = [...magicCards, ...magicCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setTurns(0);
		setCards(shuffleCards);
	};

	// handle a choice
	const handleChoice = (card) => {
		cardOne ? setCardTwo(card) : setCardOne(card);
	};

	// compare 2 selected cards
	useEffect(() => {
		if (cardOne && cardTwo) {
			if (cardOne.src === cardTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						return card.src === cardOne.src
							? { ...card, matched: !card.matched }
							: card;
					});
				});
				resetTurn();
			} else {
				resetTurn();
			}
		}
	}, [cardOne, cardTwo]);
	console.log(cards);
	// reset choices & increase turn
	const resetTurn = () => {
		setCardOne(null);
		setCardTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
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
