import { theme as ChakraTheme, extendTheme } from '@chakra-ui/react';
import globalStyles from './globals';
// ------------- This is a global theme for Chakra-ui (https://chakra-ui.com/docs/styled-system/customize-theme) -------------

// Define custom colors here:
const colors = {
	brand: {
		main: '#000000',
		hoverMain: '#222222',
		lightGrey: '#E0E0E0',
		secondaryGrey: '#C5C5C5',
		white: '#ffffff',
		hoverWhite: '#F6F6F6',
	},
};

const appTheme = extendTheme({
	colors,
	// Handle global styles here:
	styles: globalStyles,

	// Add any custom fonts here:
	fonts: {
		...ChakraTheme.fonts,
	},

	// Add any extended component styles here:
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: '0 0 0 4px #E0E0E090',
				},
			},
		},
	},
});

export default appTheme;
