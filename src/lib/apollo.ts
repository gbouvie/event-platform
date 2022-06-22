import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2kck209f401xm4l7bb7wh/master',
    cache: new InMemoryCache()
})