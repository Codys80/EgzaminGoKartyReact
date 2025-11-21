import { useState, useRef } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [gokarty, setGokarty] = useState([
    {id: 1, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 13, jezdzi: "Tak", usterka: "Mniejsza moc"},
    {id: 2, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 15, jezdzi: "Tak", usterka: ""},
    {id: 3, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 16, jezdzi: "Tak", usterka: "Zapowietrza się"},
    {id: 4, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 17, jezdzi: "Tak", usterka: ""},
    {id: 5, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 18, jezdzi: "Nie", usterka: "Wyciek oleju, przewody paliwowe urwane, tłok wystrzelił górą, komora silnika pęknięta"},
    {id: 6, typ: "9hp", silnik: "spalinowy", wymagania: "wzrost", numer: 19, jezdzi: "Tak", usterka: "Lewa strona opadła, spaw ramy"},
    {id: 7, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 1, jezdzi: "Tak", usterka: ""},
    {id: 8, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 6, jezdzi: "Nie", usterka: "Pedał gazu do regulacji, zacina się"},
    {id: 9, typ: "6,5hp", silnik: "spalinowy", wymagania: "wzrost, wiek", numer: 7, jezdzi: "Tak", usterka: ""},
    {id: 10, typ: "1,5hp", silnik: "elektryczny", wymagania: "wzrost, wiek", numer: 2, jezdzi: "Nie", usterka: "Popsute akumulatory"},
  ]);
 const selectRef = useRef(null);
  function handleInputChange(myRef, id){
    setGokarty(prevGokarty =>
    prevGokarty.map(gokart => {
      if (gokart.id === id) {
        return { ...gokart, usterka: myRef.current.value };
      }
      return gokart;
    })
  );
  }

 function handleSelectChange(myRef, id){
  console.log(id);

  setGokarty(prevGokarty =>
    prevGokarty.map(gokart => {
      if (gokart.id === id) {
        return { ...gokart, jezdzi: myRef.current.value };
      }
      return gokart;
    })
  );

 }

  return (
    <div className='container bg-black'>
      <h1 className='txcolor-yellow'>Panel pracownikow - Lista gokartow</h1>
      <table>
        <tr>
          <th><strong> Numer: </strong></th>
          <th><strong> Typ: </strong></th>
          <th><strong> Silnik: </strong></th>
          <th><strong> Wymagania: </strong></th>
          <th><strong> Jezdzi: </strong></th>
          <th><strong> Usterka: </strong></th>
        </tr>
          {gokarty.map((gokart) => (
          <tr key={gokart.id}>
            <td> {gokart.numer},  </td>
            <td> {gokart.typ},  </td>
            <td> {gokart.silnik},  </td>
            <td> {gokart.wymagania}</td>
            <td> 
                <select onChange={() => (handleSelectChange(selectRef, gokart.id),  console.log(selectRef.current.value))} defaultValue={gokart.jezdzi} ref = {selectRef}>
                  <option value = "Tak" ref = {selectRef} onSelect={() => selectRef.current.value = "Tak"}> Tak </option>
                  <option value = "Nie" ref = {selectRef} onSelect={() => selectRef.current.value = "Nie"}> Nie </option>
                </select>
            </td>
            <td>
              <input type='text' style={{display: gokart.jezdzi === "Nie" ? "block" : "none"}} defaultValue={gokart.usterka} onChange={() => handleInputChange(selectRef, gokart.id)}/>
            </td>
          </tr>
        ))}
      </table>
      <button className='btn btn-warning'>Kontakt do szefa</button>
    </div>
  )
}

export default App
