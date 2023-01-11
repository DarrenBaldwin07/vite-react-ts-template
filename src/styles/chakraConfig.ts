import { theme as ChakraTheme, extendTheme } from '@chakra-ui/react';

// ------------- This is a global theme for chakra-ui (https://chakra-ui.com/docs/styled-system/customize-theme) -------------

// Define custom colors here
const colors = {
	brand: {
		main: '#000000',
		hoverMain: '#323232',
		lightGrey: '#E0E0E0',
		secondaryGrey: '#C5C5C5',
		white: '#ffffff',
		hoverWhite: '#F6F6F6',
	},
};

// TODO: this needs to have a template for dark mode and light mode as well
const appTheme = extendTheme({
	colors,
	// Handle global styles:
	styles: {
		global: {
			body: {
				bg: '',
			},
		},
	},
	// TODO: add a custom font here
	fonts: {
		...ChakraTheme.fonts,
	},
});

export default appTheme;
