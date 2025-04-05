// App.tsx
import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategoryFilter } from '../components/CategoryFilter';
import { RecipeGrid } from '../components/RecipeGrid';
import { ActionFooter } from '../components/ActionFooter';

export default function App() {
    return (
        <Box>
            <Header />

            <Flex direction={{ base: 'column', lg: 'row' }} p={4} gap={8}>
                <Box flexShrink={0} w={{ lg: '300px' }}>
                    <CategoryFilter />
                </Box>

                <Box flex={1}>
                    <HeroSection />
                    <RecipeGrid />
                </Box>
            </Flex>

            <ActionFooter />
        </Box>
    );
}
