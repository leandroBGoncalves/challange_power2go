import { useContext, useEffect } from 'react';
import { ContextApi } from '../../contexts/contextProviders';

import styles from './style.module.scss';
export function SectionNavigator() {
    const { 
        countryHistory,
        setCountrySelected,
     } = useContext(ContextApi);

    return (
        <div className={styles.container}>
            {countryHistory.length > 0 &&
                <>
                    <h1>Pesquisas recentes</h1>
                    <div className={styles.contentShapes}>
                        {countryHistory.map((country: any) => (
                            <div 
                                key={country.name.common}
                                onClick={() => setCountrySelected(country)}
                            >
                                <img src={country?.flags?.svg} alt="FlagCountry" />
                                <p>{country?.name?.common}</p>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}