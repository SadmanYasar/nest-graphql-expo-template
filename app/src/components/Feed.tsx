import { View, Text } from "react-native";
import { useQuery } from '@apollo/client';
import { gql } from "../gql";

const allCats = gql(/* GraphQL */`
    query Cats {
        cats {
            id
            name
            age
        }
}
`
)

export default function Feed() {
    const { data, loading, error } = useQuery(allCats);

    if (loading || !data?.cats) {
        return (
            <>
                <Text>
                    Loading...
                </Text>
            </>
        )
    }

    if (error) {
        return (
            <>
                <Text>
                    Error!
                </Text>
            </>
        )
    }

    return (
        <>
            <View>
                {data.cats.map((cat) => (
                    <Text key={cat?.id}>{cat?.name}, age is {cat?.age}</Text>
                ))}
            </View>
        </>
    )
}