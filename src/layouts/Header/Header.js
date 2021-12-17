import React, { useContext, memo } from 'react';
import { appStore } from '../../state/app';
// import Navigation from '../../components/Navigation';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import Loader from '../../components/Loader/Loader';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';

const Header = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;

  if (!wallet) {
    return <Loader />;
  }

  return (
    <header className="header">
      {/* <Navigation className="header__navigation" signedIn={wallet.signedIn} /> */}
      <SocialLinks className="header__social" />

      {account?.accountId ? (
        <ConnectWalletBtn
          text={account.accountId}
          handleClick={() => wallet.signOut()}
        />
      ) : (
        <ConnectWalletBtn handleClick={() => wallet.signIn()} />
      )}
    </header>
  );
};

export default memo(Header);
