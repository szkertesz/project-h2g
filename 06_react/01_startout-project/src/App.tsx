import { useState,  useEffect } from 'react';
import './App.css';

import List from './components/List'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [alertsLoaded, setAlertsLoaded] = useState<object[]>([]);
  const now = Date.now();

  const getData = async() => {
    const response = await fetch(
        `https://futar.bkk.hu/api/query/v1/ws/otp/api/where/alert-search.json?&version=3&appVersion=3&start=${now}`
    );
    const alertsData = await response.json();
    const alerts = alertsData.data.references.alerts
    // convert the `alerts`property of AlertsData object to an array
    const alertsArray = Object.keys(alerts).map(key => alerts[key]);
    console.log(alertsArray)
    setAlertsLoaded(alertsArray)
  }

  useEffect(() => {
    setIsLoading(true)
    getData()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <section>
      <p>Loading</p>
    </section>
  }

  return (
      <section>
          <h1>BKF Alerts</h1>
          <List alerts={alertsLoaded} />
      </section>
  );
}

export default App;
