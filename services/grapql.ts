import { gql, Client, cacheExchange, fetchExchange } from '@urql/core';

const client = new Client({
  url: process.env.BACKEND_URL ?? '',
  exchanges: [fetchExchange],
});

// const TodosQuery = gql`
//   query Posts {
//     posts {
//       id
//       body
//       title
//     }
//   }
// `;
const books = gql`
  query Book {
    book {
      isbn
      price
      title
    }
  }
`;

export const getAllAddress = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return client.query(books, {}).toPromise();
};
