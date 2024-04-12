// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract StreamerDonation {

    uint256 public constant SUB_AMOUNT = 0.01 * 1e18;

    mapping(address => uint256) public balances;
    
    event Donation(address indexed from, address indexed to, uint256 amount);

    function donateToStreamer(address streamer) external payable {
        require(streamer != address(0), "Invalid streamer address");
        require(msg.value > 0, "Invalid donation amount");

        balances[streamer] += msg.value;

        emit Donation(msg.sender, streamer, msg.value);
    }

    function subToStreamer(address streamer) external payable {
        require(streamer != address(0), "Invalid streamer address");
        require(msg.value == SUB_AMOUNT, "Invalid donation amount");

        balances[streamer] += msg.value;

        emit Donation(msg.sender, streamer,SUB_AMOUNT);
    }

    function withdraw() external {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "No balance to withdraw");

        payable(msg.sender).transfer(balance);

        balances[msg.sender] = 0;
    }

    function getStreamerBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
