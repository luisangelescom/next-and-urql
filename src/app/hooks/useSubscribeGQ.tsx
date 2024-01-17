'use client';
import { useEffect } from 'react';
import { Client, cacheExchange, fetchExchange, gql, subscriptionExchange } from '@urql/core';
import { createClient as createWSClient } from 'graphql-ws';

import { revalidateHome } from '@/server/service/revalidate-home';

const MessageSub = gql`
  subscription SubAddress {
    subAddress(topic: "test") {
      street
      zip
    }
  }
`;

const url = 'localhost:3000/graphql';
const UseSubscribeGQ = () => {
  useEffect(() => {
    const wsClient = createWSClient({ url: `ws://${url}` });
    const client = new Client({
      url: `http://${url}`,
      exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription(request) {
            const input = { ...request, query: request.query || '' };
            return {
              subscribe(sink) {
                const unsubscribe = wsClient.subscribe(input, sink);
                return { unsubscribe };
              },
            };
          },
        }),
      ],
    });

    const { unsubscribe } = client.subscription(MessageSub, {}).subscribe(({ data, error }) => {
      console.log({ data, error });
      if (data) {
        // const { subAddress } = data;
        // setShowAddress(subAddress);
        revalidateHome();
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return null;
};

export default UseSubscribeGQ;
