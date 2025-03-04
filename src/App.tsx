import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
import { FruitType } from "./typescript/FruitType";

/**
 * NOM ADJECTIF
 * cat
 * house
 *
 * red house
 * cat house
 * house cat
 *
 * cat array
 * FruitType array
 * FruitType []
 * FruitType[]
 * Array of FruitType
 * Array < FruitType >
 * Array<FruitType>
 */

function App() {
  // state (état, données)
  const [fruits, setFruits] = useState<FruitType[]>([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // comportements
  const handleDelete = (id: number) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter: FruitType) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipulation sur la copie du state
    fruitsCopy.push(fruitAAjouter);

    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  // function afficherFruitPrefere(fruitNom: string) {
  //   alert(`J'aime trop ce fruit: ${fruitNom}`);
  // }

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => handleDelete(fruit.id)}
            backgroundColor="red"
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

/**
 * Une SIGNATURE d'une fonction, c'est 3 choses :
 * 1) Le NOM de la fonction
 * 2) Le TYPE des valeurs d'entrée de la fonction (i.e. paramètres)
 * 3) Le TYPE des valeurs de sortie de la fonction (i.e. valeur de retour)
 *
 */
