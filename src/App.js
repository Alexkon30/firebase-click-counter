import { useState, } from 'react';
import './App.css'
import { runTransaction, doc, getFirestore, onSnapshot } from 'firebase/firestore'


function App() {
  const db = getFirestore()
  const [value, setValue] = useState(0)


  onSnapshot(doc(db, "counters", "counter"), (doc) => {
    setValue(doc.data().value);
  });


  const increase = async () => {
    const docRef = doc(db, 'counters', 'counter');

    try {
      runTransaction(db, async (transaction) => {
        const document = await transaction.get(docRef)
        if (!document.exists()) {
          throw new Error("Document does not exist!")
        }

        const newValue = document.data().value + 1;
        transaction.update(docRef, { value: newValue })
        // console.log("Transaction successfully committed!", newValue)
      });
    } catch (e) {
      console.log("Transaction failed: ", e)
    }
  }

  return (
    <div className='container'>
      <p>{value}</p>
      <input type="button" value='Increase' onClick={increase} />
    </div>
  );
}

export default App;
