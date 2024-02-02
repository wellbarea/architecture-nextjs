import { Card, CardBody, Heading, Stack, Text, Image, Grid, CardFooter } from "@chakra-ui/react";

import { Props } from "./types"

const List = ({ data }: Props) => {
    return (
        <Grid display='flex' gap={5} flexWrap='wrap'>
            {data.map((item) => (
                <Card maxW='sm' key={item.id}>
                    <CardBody>
                        <Image
                            src={item.social_image}
                            alt={item.title}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.title}</Heading>
                            <Text>
                                {item.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter display='flex' flexDirection='column'>
                        <Text color='teal'>{item.user.username}</Text>
                        <Text color='gray'>{item.tags}</Text>
                    </CardFooter>
                </Card>
            ))}
        </Grid>
    )
}

export default List;