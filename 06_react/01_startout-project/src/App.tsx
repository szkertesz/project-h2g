import { useState, useEffect } from 'react';
import './App.scss';
import { Alert } from './components/Alert.interface';
import Layout from './ui/Layout';

import List from './components/List';
import Warning from './components/Warning';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [alertsLoaded, setAlertsLoaded] = useState<Alert[]>([]);
    const now = Date.now();

    const getData = async () => {
        try {
            const response = await fetch(
                `https://futar.bkk.hu/api/query/v1/ws/otp/api/where/alert-search.json?&version=3&appVersion=3&start=${now}`
            );
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const alertsData = await response.json();
            const alerts = alertsData.data.references.alerts;
            // convert the `alerts`property of AlertsData object to an array
            const alertsArray = Object.keys(alerts).map(
                (key) => alerts[key]
            ) as Alert[];
            setAlertsLoaded(alertsArray);
            setIsLoading(false);
        } catch (error) {
          if (error instanceof Error) {
            console.warn(String(error.message))
          }
        }
    };

    useEffect(() => {
        getData();
        document.body.classList.add('govuk-template__body');
        return () => {};
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading</p>
            </section>
        );
    }

    return (
        <Layout>
            <section>
                <Warning />
                <List alerts={alertsLoaded} />
            </section>
        </Layout>
    );
}

export default App;
