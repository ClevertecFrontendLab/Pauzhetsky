// components/HeroSection.tsx
import { Box, Heading, Text } from '@chakra-ui/react';

export const HeroSection = () => (
    <Box p={8} bg='white'>
        <Heading as='h1' size='2xl' mb={4}>
            Веганская кухня
        </Heading>
        <Text fontSize='lg'>
            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
            вегетарианскую диету
        </Text>
    </Box>
);
