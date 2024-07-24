import React, {useState} from "react";

function App() {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relation, setRelation] = useState('');
 
    const checkStatus = (e) => {
        e.preventDefault();
        if(name1 == '' || name2 ==''){
            setRelation('Please enter valid input');
            return
        }
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str1[i] == str2[j]) {
                    str1 = str1.replace(str1[i], "")
                    str2 = str2.replace(str2[j], "")
                }
            }
        }
        const n = (str1.length + str2.length)%6
        if(n==0) setRelation("Siblings")
        if(n==1) setRelation("Friends")
        if(n==2) setRelation("Love")
        if(n==3) setRelation("Affection")
        if(n==4) setRelation("Marriage")
        if(n==5) setRelation("Enemy")
    }

    const clearNames = () => {
        setName1('');
        setName2('');
    }

    return( 
    <div id='main'>
        <form onSubmit={checkStatus}>
            <input type='text' name='name1' data-testid="input1" placeholder='Enter first name' value={name1} onChange={(e) => setName1(e.target.value)}/>
            <input type='text' name='name2' data-testid="input2" placeholder='Enter second name' value={name2} onChange={(e) => setName2(e.target.value)}/>
            <button data-testid="calculate_relationship" type="submit">Calculate Relationship</button>
            <button data-testid="clear" type="button" onClick={clearNames} >Clear</button>
        </form>
        <h3 data-testid="answer">{relation}</h3>
    </div>
)
}

export default App;
