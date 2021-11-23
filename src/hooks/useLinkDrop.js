/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { generate as id } from 'shortid';
import { NEAR } from 'near-units';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { GAS } from '../state/near';
import { appStore } from '../state/app';

const useLinkDrop = () => {
  const history = useHistory();

  const { state, update } = useContext(appStore);
  const { contract, account } = state;
  const { app } = state;

  const walletUrl = (contractId, key, url) =>
    `https://wallet.testnet.near.org/linkdrop/${contractId}/${key}?redirectUrl=${url}/my-nfts`;

  const createLinkDrop = async (count) => {
    const keyPair = KeyPairEd25519.fromRandom();
    const currentUrl = window.location.origin;
    const url = walletUrl(
      contract.contractId,
      keyPair.secretKey.toString(),
      currentUrl,
    );

    const { linkDropArray } = app;

    localStorage.setItem(
      `linkDropArray:${account.accountId}`,
      JSON.stringify([
        ...linkDropArray,
        {
          link: url,
          text: '',
          id: id(),
          isUsed: false,
        },
      ]),
    );

    const cost = await contract.cost_of_linkdrop();
    const publicKey = keyPair.getPublicKey().toString();

    await contract.create_linkdrop({
      args: { public_key: publicKey },
      gas: GAS,
      amount: cost,
      callbackUrl: `${currentUrl}/link-drop`,
    });
  };
  return { createLinkDrop };
};

export default useLinkDrop;
