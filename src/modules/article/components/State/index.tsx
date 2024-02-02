import { StateEnum, StateMapper } from "@/entities/Article";
import { Grid, Tag as Tags } from "@chakra-ui/react";
import { Props } from "./types";

const State = ({ state, setState }: Props) => {

    const enumValues = Object.values(StateEnum);

    return (
        <Grid display='flex' gap={5}>
            {enumValues.map((enumValue) => (
                <Tags 
                    cursor='pointer'
                    size='md'
                    key={enumValue}
                    onClick={() => setState(enumValue)} colorScheme={state === enumValue ? `teal` : `gray`}>
                    {StateMapper[enumValue]}
                </Tags>
            ))}
        </Grid>
    )
}

export default State;