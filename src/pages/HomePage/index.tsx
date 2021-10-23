import {  FormEvent ,useState } from "react"
import { useHistory } from "react-router";



export function HomePage() {
    const [value, setValue] = useState("");
    const [amount, setAmount] = useState("");
    let continuar;
    let history = useHistory();
    
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        localStorage.setItem("amountQuestions", amount);
        continueVerify()
    }

    function continueVerify() {
            continuar = confirm("Você deseja continuar?");
            if(continuar == true){
                history.push("/questions")
            }else {
                setValue("");
                localStorage.removeItem("amountQuestions");
                return;
            }
    }

    return(
        <main>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="number" onChange={event => setValue(event.target.value)} value={value}/>
                <button onClick={() => setAmount(value)}>
                    Ir Para as Questões
                </button>
            </form>
        </main>
    )
}