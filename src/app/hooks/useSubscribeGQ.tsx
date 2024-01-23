'use client';
import { useEffect } from 'react';
import { revalidateHome } from '@/server/service/revalidate-home';

import * as withAbsintheSocket from '@absinthe/socket';
import { Socket as PhoenixSocket } from 'phoenix';

// const operation = `
//   subscription userSubscription($repoName: String!) {
//     commentAdded(repoName: $repoName) {
//       body
//       id
//       title
//     }
//   }
// `;

const operation = `subscription BookReader {
  bookReader {
      email
      id
      isbn
      name
  }
}`;

const URLSocket = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';
const UseSubscribeGQ = () => {
  useEffect(() => {
    const absintheSocket = withAbsintheSocket.create(new PhoenixSocket(URLSocket));

    const notifier = withAbsintheSocket.send(absintheSocket, {
      operation,
      variables: { repoName: '/1' },
    });

    const logEvent =
      (eventName: unknown) =>
      (...args: any) => {
        if (eventName === 'result') {
          const { data } = args[0];
          console.log({ data });
          revalidateHome();
        } else console.log(eventName, ...args);
      };

    withAbsintheSocket.observe(absintheSocket, notifier, {
      onAbort: logEvent('abort'),
      onError: logEvent('error'),
      onStart: logEvent('open'),
      onResult: logEvent('result'),
      onCancel: logEvent('cancel'),
    });

    return () => {
      // cualquiera de las 2 formas se puede cerrar el socket
      absintheSocket.phoenixSocket.disconnect();
      // withAbsintheSocket.cancel(absintheSocket, notifier);
    };
  }, []);

  return <>null</>;
};

export default UseSubscribeGQ;
