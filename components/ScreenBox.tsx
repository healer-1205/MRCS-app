import { Box, ScrollView } from "native-base";
import React from "react";

interface ScreenBoxProps {
	children?: JSX.Element | JSX.Element[];
	scrollable: boolean;
	mt?: string; 
}

export const ScreenBox = (props: ScreenBoxProps) => {
	const scrollable = props.scrollable;

  return (
		<>
			{scrollable && 
				<ScrollView {...props}>
					<Box
						w="100%"
						flex={1}
						safeArea
						px="6"
						py="0"
						backgroundColor="white"
					>
						{props.children}
					</Box>
				</ScrollView>
			}
			{!scrollable && 
				<Box
					w="100%"
					flex={1}
					safeArea
					px="6"
					py="0"
					backgroundColor="white"
				>
					{props.children}
				</Box>
			}
		</>
  );
};
