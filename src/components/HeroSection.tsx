import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    useBreakpoint,
    Text,
    ResponsiveValue,
} from '@chakra-ui/react';
import { Property } from 'csstype';
import { useState } from 'react';

interface HeroSectionProps {
    selectedCategory: string | null;
}

interface HeadingDimensions {
    size: string;
    lineHeight: string;
    textAlign: ResponsiveValue<Property.TextAlign>;
}

export const HeroSection = ({ selectedCategory }: HeroSectionProps) => {
    const breakpoint = useBreakpoint();
    const [isChecked, setIsChecked] = useState(false);

    const getDimensions = () => {
        switch (breakpoint) {
            case '2xl':
                return {
                    container: {
                        w: '898px',
                        h: 'auto',
                        p: '32px 0 0 0',
                    },
                    search: { w: '518px', h: '48px' },
                    filter: { w: '518px', h: '40px' },
                    button: { w: '48px', h: '48px', p: '0 12px' },
                    heading: {
                        size: '48px',
                        lineHeight: '100%',
                        textAlign: 'center',
                    } as HeadingDimensions,
                };
            case 'xl':
                return {
                    container: {
                        w: '578px',
                        h: 'auto',
                        p: '32px 0 0 0',
                    },
                    search: { w: '378px', h: '48px' },
                    filter: { w: '458px', h: '40px' },
                    button: { w: '48px', h: '48px', p: '0 12px' },
                    heading: {
                        size: '48px',
                        lineHeight: '100%',
                        textAlign: 'center',
                    } as HeadingDimensions,
                };
            case 'md':
                return {
                    container: {
                        w: '727px',
                        h: 'auto',
                        p: '16px 0 0 0',
                    },
                    search: { w: '448px', h: '32px' },
                    button: { w: '32px', h: '32px', p: '0 9px' },
                    heading: {
                        size: '24px',
                        lineHeight: '133%',
                        textAlign: 'center',
                    } as HeadingDimensions,
                };
            default:
                return {
                    container: {
                        w: '328px',
                        h: 'auto',
                        p: '0',
                    },
                    search: { w: '100%', h: '32px' },
                    button: { w: '32px', h: '32px', p: '0 9px' },
                    heading: {
                        size: '24px',
                        lineHeight: '133%',
                        textAlign: 'center',
                    } as HeadingDimensions,
                };
        }
    };

    const dimensions = getDimensions();
    const isDesktop = ['xl', '2xl'].includes(breakpoint);
    const isMd = breakpoint === 'md';

    const renderHeading = () => (
        <Heading
            as='h1'
            fontFamily='var(--font-family)'
            fontWeight='700'
            fontSize={dimensions.heading.size}
            lineHeight={dimensions.heading.lineHeight}
            textAlign={dimensions.heading.textAlign}
            color='#000'
            mb={isMd ? 2 : 6}
        >
            {selectedCategory === 'Веганская кухня' ? 'Веганская кухня' : 'Приятного аппетита!'}
        </Heading>
    );

    const renderFilters = () => (
        <Flex gap={4} w={dimensions.filter?.w} h={dimensions.filter?.h}>
            {isDesktop ? (
                <Flex align='center' gap='16px'>
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight='500'
                        fontSize='16px'
                        lineHeight='150%'
                        color='#000'
                    >
                        Исключить мои аллергены
                    </Text>
                    <Box
                        position='relative'
                        w='34px'
                        h='20px'
                        onClick={() => setIsChecked(!isChecked)}
                        cursor='pointer'
                        role='switch'
                        aria-checked={isChecked}
                    >
                        <svg width='34' height='20' viewBox='0 0 34 20' fill='none'>
                            <rect width='34' height='20' rx='10' fill='black' fillOpacity='0.16' />
                            <circle
                                cx={isChecked ? '24' : '10'}
                                cy='10'
                                r='8'
                                fill='white'
                                style={{ transition: 'cx 0.2s ease-in-out' }}
                            />
                        </svg>
                    </Box>
                </Flex>
            ) : (
                <Button
                    variant='outline'
                    p='6px 0 6px 8px'
                    w='268px'
                    h='36px'
                    bg='white'
                    borderRadius='9999px'
                    justifyContent='space-between'
                >
                    <Flex align='center' gap={2}>
                        <svg width='34' height='20' viewBox='0 0 34 20' fill='none'>
                            <rect width='34' height='20' rx='10' fill='black' fillOpacity='0.16' />
                            <circle cx='10' cy='10' r='8' fill='white' />
                        </svg>
                        <Text
                            fontFamily='var(--font-family)'
                            fontWeight='400'
                            fontSize='16px'
                            lineHeight='150%'
                            color='rgba(0, 0, 0, 0.64)'
                        >
                            Исключить мои аллергены
                        </Text>
                    </Flex>
                </Button>
            )}

            {isDesktop && (
                <Button
                    variant='outline'
                    w='234px'
                    h='40px'
                    borderRadius='6px'
                    justifyContent='space-between'
                >
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight='400'
                        fontSize='16px'
                        lineHeight='150%'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        Выберите из списка...
                    </Text>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                        <path
                            d='M10.0001 10.9767L14.1251 6.85165L15.3034 8.02999L10.0001 13.3333L4.69678 8.02999L5.87511 6.85165L10.0001 10.9767Z'
                            fill='#2D3748'
                        />
                    </svg>
                </Button>
            )}
        </Flex>
    );

    return (
        <Box
            p={dimensions.container.p}
            w={dimensions.container.w}
            h={dimensions.container.h}
            bg='white'
            mx='auto'
            mb={6}
        >
            {renderHeading()}

            <Flex direction='column' gap={4}>
                <Flex align='center' gap={4}>
                    <Button
                        variant='outline'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        p={dimensions.button.p}
                        w={dimensions.button.w}
                        h={dimensions.button.h}
                    >
                        <svg
                            width={isMd ? '20' : '24'}
                            height={isMd ? '20' : '24'}
                            viewBox='0 0 24 24'
                            fill='none'
                        >
                            <path
                                d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
                                fill='black'
                            />
                        </svg>
                    </Button>

                    <Input
                        placeholder='Название или ингредиент...'
                        w={dimensions.search.w}
                        h={dimensions.search.h}
                        borderRadius='6px'
                        _focus={{ borderColor: 'green.400' }}
                        fontSize={isMd ? '14px' : '16px'}
                    />
                </Flex>

                {isDesktop && renderFilters()}
            </Flex>
        </Box>
    );
};
