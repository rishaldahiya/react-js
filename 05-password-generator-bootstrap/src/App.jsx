import { useState,useCallback,useEffect,useRef } from 'react';

function App() {
  
  //useState hooks
  const [lenght,setLength] = useState(8)
  
  const [numberAllowed,setNumberAllowed] = useState(false)
  
  const [characterAllowed,setCharacterAllowed] = useState(false)
  
  const [password,setpassword] = useState("")
  

//useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789" //appendig numbers

    if(characterAllowed) str +=  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" //appending special characters

    for (let index = 1; index <lenght ; index++){
      let char = Math.floor( Math.random() * str.length + 1)
      pass += str.charAt(char)  

     }//loop end

    setpassword(pass)


  }, [lenght, numberAllowed,characterAllowed,setpassword]);

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => {
    passwordGenerator()
  }, [lenght, numberAllowed,characterAllowed,setpassword]);


  const passwordRef = useRef(null)

  const copyToClipBord = useCallback(() => {
    passwordRef.current?.select(); // Select the text
    //passwordRef.current?.setSelectionRange(0,3); // Select the text
    window.navigator.clipboard.writeText(password); // Copy to clipboard
  }, [password]);
  
  
  
 

  return (
    <div className="container d-flex flex-column align-items-center" style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-4" style={{ color: "orange" }}>Password Generator</h1>

      {/* Card-like border box */}
      <div className="col-md-6 bg-light border border-primary rounded-3 shadow-lg p-4">
        
        {/* Input and Copy Button */}
        <div className="input-group mb-3">
          <input type="text" 
          className="form-control" 
          placeholder="password"  
          value={password}
          ref={passwordRef}
          readOnly/>
          <button className="btn btn-outline-success" type="button" onClick={copyToClipBord}>Copy</button>
        </div>

        {/* Range Slider with Label in the Same Row */}
        <div className="row col-md-12">
        
          <div className="col-md-4 d-flex align-items-center gap-2">
            <input type="range" 
            className="form-range w-100" 
            min={8} 
            max={100} 
            step="1" 
            value={lenght}
            onChange={(e) => setLength(e.target.value)}
            />
            
            <label className="fw-bold">Length: {lenght}</label>
          </div>

          <div className="col-md-4 d-flex align-items-center gap-2">
            <input className="form-check-input" 
            type="checkbox"
            onChange={ () => setNumberAllowed((prev) => !prev)}
            /> 
            
            <label className="form-check-label" htmlFor="flexCheckNumbers">Numbers</label>
          </div>

          <div className="col-md-4 d-flex align-items-center gap-2">
            <input className="form-check-input" 
            type="checkbox"
            onChange={ () => setCharacterAllowed((prev) => !prev)}
            /> 
            
            <label className="form-check-label" htmlFor="flexCheckCharacters">Characters</label>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
