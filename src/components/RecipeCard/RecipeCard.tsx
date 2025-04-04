// components/RecipeCard/RecipeCard.tsx
import { Box, Text, Image, Heading } from '@chakra-ui/react';

type RecipeCardProps = {
    title: string;
    description: string;
    image: string;
};

export const RecipeCard = ({ title, description }: RecipeCardProps) => (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={4}>
        <Image src='/img/MenuItem/logo_yeedaa.svg' alt={title} mb={4} borderRadius='md' />
        <Heading as='h3' size='md' mb={2}>
            {title}
        </Heading>
        <Text>{description}</Text>
    </Box>
);
