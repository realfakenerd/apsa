import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';
import cssDeclarationSorter from 'css-declaration-sorter';

const config = {
	plugins: [tailwindcss(), autoprefixer, cssDeclarationSorter({order: 'concentric-css'}), cssnano]
};

export default config;
