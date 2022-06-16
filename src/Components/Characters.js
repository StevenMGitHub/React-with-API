import React, { Fragment } from 'react'

export default function Characters(props) {

  const {characters, setCharacters} = props;

  const resetCharacters = () => {
    console.log('reseteando');
    setCharacters(null);
  }

  return (
    <>
      <div className='characters'>
         <h1>Characters component</h1>
            <span className='back-home' onClick={resetCharacters}>Volver al home</span>
          <div className='container-characters'>
           {characters.map((char, index) => (
                  <div className='character-container' key={index}>
                       <div>
                                <img src={char.image} alt={char.name}></img> 
                       </div> 
                       <div>
                                <h3>{char.name}</h3>
                                <h6>{char.status === "Alive" ? (
                                    <>
                                       <span className='alive'>Alive</span>
                                    </>
                                ) : (
                                    <>
                                       <span className='dead'>Dead</span>
                                    </>
                                )}
                                </h6>
                                <p>
                                  <span className='text-gray'>
                                    Episodios: 
                                  </span>
                                  <span>
                                    {char.episode.length}
                                  </span>
                                </p>
                                <p>
                                  <span className='text-gray'>
                                     Especie: 
                                  </span>
                                  <span>
                                       {char.species}
                                  </span>
                                </p>
                                <h5>
                                  <span>
                                      Gender:
                                  </span>
                                  <span>
                                      {char.gender}
                                  </span>
                                </h5>
                       </div>  
                  </div>
           ))}
          </div>
          <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
      </div>
    </>
  )
}
