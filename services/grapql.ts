import { gql, Client, cacheExchange, fetchExchange } from '@urql/core';

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [fetchExchange],
});

const TodosQuery = gql`
  query {
    address {
      street
      zip
    }
  }
`;

export const getAllAddress = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return client.query(TodosQuery, {}).toPromise();
};