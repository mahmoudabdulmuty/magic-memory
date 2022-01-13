import './SingleCard.css';

export default function SingleCard({ src, handleClick, flipped }) {
	return (
		<div className="card">
			<div className={flipped ? 'flipped' : ''}>
				<img className="front" src={src} alt="front card" />
				<img
					className="back"
					src="./img/cover.png"
					onClick={handleClick}
					alt="back card"
				/>
			</div>
		</div>
	);
}
