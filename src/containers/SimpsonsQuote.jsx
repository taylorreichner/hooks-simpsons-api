import React, { useState } from 'react';
import SimpsonsFetch from '../components/Load';
import Quote from '../components/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonQuoteContainer = () => {
    const [quote, setQuote] = useState({})


const handleClick = async () => {
    const quote = await fetchQuote()
    setQuote(quote)
}

return (
    <>
        <SimpsonsFetch onClick={handleClick} />
        <Quote {...quote} />
    </>

)
}

export default SimpsonQuoteContainer;