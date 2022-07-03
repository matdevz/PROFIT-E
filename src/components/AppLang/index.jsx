import React from 'react';

import { Langagues, IconPortuguese, IconSpanish, IconEnglish } from './styles';

export const AppLang = () => {
	return (
		<Langagues>
			<IconPortuguese>
				<img src='./src/assets/lang-br.svg' alt='Language Portuguese' />
			</IconPortuguese>
			<IconSpanish>
				<img src='./src/assets/lang-es.svg' alt='Language Spanish' />
			</IconSpanish>
			<IconEnglish>
				<img src='./src/assets/lang-en.svg' alt='Language English' />
			</IconEnglish>
		</Langagues>
	);
};
