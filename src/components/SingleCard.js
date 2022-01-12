import './SingleCard.css';

export default function SingleCard({ src, id }) {
	return (
		<div className="card">
			<div>
				<img src={src} alt="front card" />
				<img src="./img/cover.png" alt="back card" />
			</div>
		</div>
	);
}
