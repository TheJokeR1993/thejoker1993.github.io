
import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Component/Header/Header'
import MainComponent from "./Component/Main_component";
import ContextUser from "./contextUser";
import ApiGl from './apy/apySocial'

import token from './localData/LocalData'


export let api = {}
const changeApi = data => api = { ...data }


function App() {
  const [hook, setHook] = useState(null)
  const [isApi, setApi] = useState(false)
  useEffect(() => {
    token.getItem()
      .then(item => {
        changeApi(ApiGl(''))
        setApi(true)
        if (!item) return
        const data = new Date().getTime()

        if (data >= item.time) {

          token.remove()
        } else {
          changeApi(ApiGl(item.token))
          api.auth.authMe(item.token)
            .then((d => setHook(d.data)))
        }

      })

  }, [])
  if (!isApi) return <div>Loading</div>

  return (
    <div>
      <ContextUser.Provider value={{ hook, setHook }}>
        <Header />
        <MainComponent />
        {/* <Footer /> */}
      </ContextUser.Provider>
    </div>
  );
}

export default App;


