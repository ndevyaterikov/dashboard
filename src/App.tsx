import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";

const App=observer(()=> {

    const {store} = useContext(Context)

    useEffect(()=>{
        store.requestGadanieData().then(r=>{
           console.log(Object.values(store.requestFoGadanie)[0].request)

           })
    },[])

    if (Object.entries(store.getrequestForGadanie()).length === 0){
        return <div>Loading...</div>
    }else {
        return (
            <div className="App">
                {Object.values(store.requestFoGadanie.map(r=><div key={r.id}>
                    <h3>Пользователь {r.userId}</h3>
                    <h5>Запрос номер {r.id}</h5>
                    <div className="m-2"> {r.request}</div>
                    <br/>
                    <div> {r.answer}</div>
                    <br/>
                    <div> {r.createdAt}</div>
                </div> ))}
            </div>
        );
    }

})

export default App;
