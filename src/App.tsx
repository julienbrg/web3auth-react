import "./App.css";
import { Web3Auth } from "@web3auth/web3auth";
import { ADAPTER_EVENTS, CHAIN_NAMESPACES } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Button from '@mui/material/Button';
import { Web3Storage } from 'web3.storage';
import abi from './contracts/abi.js';
import address from './contracts/address';

function App() {

  // console.log("abi:", abi);
  // console.log("address:", address.lodeRunner);

  function getAccessToken() {
    // Get your own API token at https://web3.storage/account/
    return process.env.REACT_APP_WEB3STORAGE_TOKEN;
  }
  getAccessToken()






  const [user, setUser] = useState(null);
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [signer, setSigner] = useState("");
  const [userFace, setUserFace] = useState("");


  useEffect(() => {
    console.log("useEffect");

    const subscribeAuthEvents = (web3auth: Web3Auth) => {
      web3auth.on(ADAPTER_EVENTS.CONNECTED, (data) => {
        console.log("Yeah!, you are successfully logged in", data);
        setUser(data);
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
        setUser(null);
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.log("some error or user have cancelled login request", error);
      });

      web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
        console.log("modal visibility", isVisible);
      });
    };

    const polygonMumbaiConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x3",
        rpcTarget: `https://ropsten.infura.io/v3/${"e54d5dcc498c4a028f10cde6ab16cf89"}`,
        displayName: "ropsten",
        blockExplorer: "https://ropsten.etherscan.io/",
        ticker: "ETH",
        tickerName: "Ethereum",
    };

    const web3auth = new Web3Auth({
      chainConfig: polygonMumbaiConfig,
      clientId: process.env.REACT_APP_WEB3AUTH_CLIENT_ID!,
    });

    setWeb3auth(web3auth);

    // ⭐️ initialize modal on page mount.
    const initializeModal = async () => {
      console.log("initializeModal");
      subscribeAuthEvents(web3auth);
      await web3auth.initModal();
      setLoaded(true);
    };

    initializeModal();
  }, []);







  const login = async () => {
    if (!web3auth) return;
    const provider = await web3auth.connect();

    // With Ethers.js
    const addEthers = new ethers.providers.Web3Provider(provider as any);
    const accounts = await addEthers.listAccounts();
    const userAddress = accounts[0];

    // With Web3
    // ...

    setSigner(userAddress);

  };

  const logout = async () => {
    if (!web3auth) return;
    await web3auth.logout();
  };
  const getUserInfo = async () => {
    if (!web3auth) return;
    const userInfo = await web3auth.getUserInfo();
    setUserFace(userInfo.profileImage as any);
    console.log(userInfo);

    login();

  };

  const renderUnauthenticated = () => {
    return (
      <div className="App">
        <Button className="app-link" onClick={login}>
          LOGIN
        </Button>
      </div>
    );
  };

  const renderAuthenticated = () => {

    return (
      <div className="App">
        <Button className="app-link" onClick={logout}>
          LOG OUT
        </Button>
        <Button className="app-link" onClick={getUserInfo}>
          Log user info
        </Button>
        <div className="Main">
          <p>
            Hello Web3Auth! 
          </p>

          {signer &&

            <p>
            This is your Ethereum address: <strong>{signer}</strong>.
            < br/> It is linked to your Google account.< br />
            </p>

          }

          {userFace &&

            <p>

            And this is your profile image: < br/>< br/>
            <img src={userFace} alt="face" />

            </p>

          }
          
          <Button className="app-link" onClick={getUserInfo}>
          Go! 
        </Button>
        </div>      
      </div>
    );
  };

  return loaded ? (user ? renderAuthenticated() : renderUnauthenticated()): <h1>Loading....</h1>;
}

export default App;
