import React from 'react'
import "../styles/Test.css"
import { useState } from "react";

export default function Test() {

const [textValeur, settextValeur] = useState('');

const isInputError = textValeur.includes('s')



    return (
            <div className="test">
                  <textarea
                  value={textValeur}
                  onChange={(e) => settextValeur(e.target.value)}
                  />
                  <button onClick={ () => alert(textValeur)}>je suis bien</button>

                  {isInputError && (
                        <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "s" ici.</div>
)}
            </div>
    )
}
