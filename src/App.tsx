import React, { useState } from 'react'
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

declare const window: any

const greeterAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'

const App = () => {
  const [greeting, setGreetingValue] = useState()

  const requestAccount = async () => {}

  const fetchGreeting = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      )

      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log('Error: ', err.message)
      }
    }
  }

  const setGreeting = async () => {}

  return <p>hi</p>
}

export default App
