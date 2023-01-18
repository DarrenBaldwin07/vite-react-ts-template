import { theme as ChakraTheme, extendTheme } from '@chakra-ui/react';

// ------------- This is a global theme for Chakra-ui (https://chakra-ui.com/docs/styled-system/customize-theme) -------------

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

const appTheme = extendTheme({
	colors,
	// Handle global styles:
	styles: {
		global: {
			body: {
				bg: '#212121',
			},
		},
	},
	// Add any custom fonts here
	fonts: {
		...ChakraTheme.fonts,
	},

	// Add any extended component styles here
	components: {},
});

export default appTheme;
