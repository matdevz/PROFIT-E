import React, { useEffect, useState, useRef } from 'react';

import {
	Container,
	Title,
	Cards,
	CardArrows,
	ArrowLeft,
	ArrowRigth,
} from './styles';
import { AppCard } from '../../components/AppCard/index';

export const Products = () => {
	const [shoes, setShoes] = useState([]);
	const carrousel = useRef(null);

	useEffect(() => {
		fetch('http://localhost:3000/src/assets/shoes.json')
			.then((res) => res.json())
			.then(setShoes);
	}, []);
	const handleClickLeft = () => {
		carrousel.current.scrollLeft += carrousel.current.offsetWidth;
	};
	const handleClickRigth = () => {
		carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
	};

	if (!shoes || !shoes.length) return null;

	return (
		<>
			<Container>
				<Title>Produtos</Title>

				<Cards ref={carrousel}>
					{shoes.map((shoe) => {
						return (
							<AppCard
								key={shoe.id}
								id={shoe.id}
								name={shoe.name}
								price={shoe.price}
								oldPrice={shoe.oldPrice}
								image={shoe.image}
							/>
						);
					})}
				</Cards>
				<CardArrows>
					<ArrowLeft
						src='./src/assets/arrow.png'
						onClick={handleClickLeft}
					/>
					<ArrowRigth
						src='./src/assets/arrow.png'
						onClick={handleClickRigth}
					/>
				</CardArrows>
			</Container>
		</>
	);
};
