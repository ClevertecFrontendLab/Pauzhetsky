// components/RecipeCard.tsx
import { Box, Image, Text, Button, Flex, Heading } from '@chakra-ui/react';

type RecipeCardProps = {
    image: string;
    title: string;
    description: string;
};

export const RecipeCard = ({ image, title, description }: RecipeCardProps) => (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={6}>
        <Image src={`/img/recipes/${image}`} alt={title} borderRadius='md' mb={4} />
        <Heading as='h3' size='md' mb={2}>
            {title}
        </Heading>
        <Text fontSize='sm' mb={4}>
            {description}
        </Text>
        <Flex gap={3}>
            <Button colorScheme='green' size='sm'>
                Сохранить
            </Button>
            <Button variant='outline' size='sm'>
                Готовить
            </Button>
        </Flex>
    </Box>
);
