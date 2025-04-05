// components/RecipeGrid.tsx
import { SimpleGrid } from '@chakra-ui/react';
import { RecipeCard } from './RecipeCard';

export const RecipeGrid = () => (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        <RecipeCard
            image='stewed-potatoes.png'
            title='Картошка, тушенная с болгарским перцем'
            description='Фасоль заменяет мясо, делая рагу сытным и питательным...'
        />
        <RecipeCard
            image='vegetable-lasagna.png'
            title='Овощная лазанья из лаваша'
            description='Сытное блюдо для ценителей блюд без мяса...'
        />
    </SimpleGrid>
);
