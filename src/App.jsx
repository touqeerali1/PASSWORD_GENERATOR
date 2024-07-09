    import React , {useRef , useState,useCallback,useEffect} from 'react'

    function App() {

    const [length, setlength] = useState(8);
    const [NumberAllowed, setNumberAllowed] = useState(false);
    const [CharacterAllowed, setNharacterAllowed] = useState(false);
    const [Password, setPassword] = useState()

const PasswordRef = useRef(null)

    const PasswordGenerator =useCallback(
    ()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopalskdjfhgzxcvbnm"
    if(NumberAllowed) str += "1234567890"
    if(CharacterAllowed) str+= "!@#$%^&*()_+"

    for(let i = 0; i < length; i++){
    let char =  Math.floor(Math.random() * str.length+1);
    pass += str.charAt(char)
    }
    setPassword(pass);

    },
    [length,NumberAllowed,CharacterAllowed,setPassword]

    )
const copyPasswordToCllipboard =useCallback(()=>{
  PasswordRef.current?.select();
  window.navigator.clipboard.writeText(Password)
    
}
,[Password])

    useEffect(() => {
      PasswordGenerator()
     
    }, [length,NumberAllowed , CharacterAllowed, PasswordGenerator])
    return (
    <>
    <div className="m-8 w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800  " > 
      <h1 className='p-5 text-4xl text-center'>Password Generator</h1>
    <div className='flex  shadow-rounded-lg overflow-hidden mb-4'>
    <input type="text"
    className='outline-none w-full py-1 px-3'
    value={Password}
    ref={PasswordRef}
    readOnly
    />
    <button
    onClick={copyPasswordToCllipboard}
    className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div>
    <div>
    <input 
    type="range"
    min={6}
    max={20}
    value={length}
    onChange={(e)=>setlength(e.target.value)}
    />
    <label > length : {length}</label>
    </div>
    <div>
    <input
    type='checkbox'
    defaultChecked={NumberAllowed}
    onChange={()=>setNumberAllowed(!NumberAllowed)}
    />
    <label >Numbers</label>
    </div>
    
    <div>
    <input
    type='checkbox'
    defaultChecked={CharacterAllowed}
    onChange={()=>setNharacterAllowed(!CharacterAllowed)}
    />
    <label >Character</label>
    </div>
    </div>
    </div>

    </>
    )
    }

    export default App
