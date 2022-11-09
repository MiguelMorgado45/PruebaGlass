
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LeftBarContext } from './context/LeftBarContext';
import PageTemplate from './templates/pageTemplate/PageTemplate';

const App = () => {

  const [leftBarStatus, setLeftBarStatus] = useState<boolean>(false);

  useEffect(() => {
    const statusValue: boolean = localStorage.getItem("leftBarStatus")
      ? true
      : false;
    setLeftBarStatus(statusValue);
  }, []);

  return (
    
      <LeftBarContext.Provider value={{ setLeftBarStatus, leftBarStatus }}>
        <PageTemplate />
      </LeftBarContext.Provider>

  )
}

export default App
