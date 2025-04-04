// src/app/App.tsx
import { Box } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import { Section } from '../components/Section/Section';

export default function App() {
    return (
        <Box mx='auto' p={{ base: 0, md: 0, xl: 0 }}>
            <Header />

            <Section title='Новые рецепты'>
                <Box px={{ base: 4, md: 8, xl: 120 }}>Пример содержимого секции</Box>
            </Section>

            <Section title='Популярные блюда'>
                <Box px={{ base: 4, md: 8, xl: 120 }}>Еще один пример</Box>
            </Section>
        </Box>
    );
}
