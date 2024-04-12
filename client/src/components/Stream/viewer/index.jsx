import React, { useEffect, useState } from "react";
import Web3 from "web3";

import Chat from "../../Chat";
import ViewerScreenContainer from "../../Rtmp/ViewerScreenContainer";

const Stream = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [streamer, setStreamer] = useState(
    "0x35931d58453e50F3F307fA1a5cc7Dbe7B06c622f"
  );
  const [donationAmount, setDonationAmount] = useState(0.2);
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        console.error("Web3 not detected");
      }
    };
    initWeb3();
  }, []);

  useEffect(() => {
    const loadContract = async () => {
      const networkId = await web3.eth.net.getId();
      const contractAddress = contractAddresses[networkId || "11155111"][0];
      console.log(contractAddress);
      const contractABI = abi;
      const contractInstance = new web3.eth.Contract(
        contractABI,
        contractAddress
      );
      setContract(contractInstance);
    };
    if (web3) {
      loadContract();
    }
  }, [web3]);

  const handleDonation = async () => {
    if (!contract) return;
    console.log("donated called");
    if (!streamer || !donationAmount) return;
    try {
      const amountInWei = web3.utils.toWei(donationAmount, "ether");
      await contract.methods.donateToStreamer(streamer).send({
        from: accounts[0],
        value: amountInWei,
      });
      console.log("one");
      const updatedBalance = await contract.methods
        .getStreamerBalance(streamer)
        .call();
      setBalance(web3.utils.fromWei(updatedBalance));

      setStreamer("");
      setDonationAmount("");
    } catch (error) {
      console.error("Donation failed:", error);
    }
  };

  const handleCheckBalance = async () => {
    if (!contract || !streamer) return;
    try {
      const balance = await contract.methods
        .getStreamerBalance(streamer)
        .call();
      setBalance(web3.utils.fromWei(balance));
    } catch (error) {
      console.error("Error checking balance:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row w-full h-full m-0">
        <div className="w-3/4 aspect-video m-12">
          <ViewerScreenContainer />
        </div>
        <div className="w-1/4 mr-5 aspect-auto">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Stream;
