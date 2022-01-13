import './SingleCard.css';

export default function SingleCard({ src, handleClick }) {
	return (
		<div className="card">
			<div>
				<img src={src} alt="front card" />
				<img src="./img/cover.png" onClick={handleClick} alt="back card" />
			</div>
		</div>
	);
}
