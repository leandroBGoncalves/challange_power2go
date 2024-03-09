
import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../contexts/contextProviders';
import { formatNumberWithLocale } from '../../utils/filters';
import { Currency, Ilanguages } from '../../types/country';

import styles from './style.module.scss';

interface infosCountry {
    name: string;
    capital: string;
    area: string;
    population: string;
    region: string;
    currencies: string;
    languages: string;
}

export function ShapesDetails() {
    const {
        countrySelected,
        getCountryHistory
    } = useContext(ContextApi);
    const [infosCountry, setInfosCountry] = useState<infosCountry>({
        name: '',
        capital: '',
        area: '',
        population: '',
        region: '',
        currencies: '',
        languages: ''
    });

    useEffect(() => {
        if (countrySelected?.name?.common) {
            setInfosCountry({
                name: countrySelected?.name?.common,
                capital: countrySelected?.capital[0] ?? '',
                area: formatNumberWithLocale(countrySelected.area ?? 0, 'pt-BR'),
                population: formatNumberWithLocale(countrySelected.population ?? 0, 'pt-BR'),
                region: countrySelected?.subregion,
                currencies: Object.values(countrySelected?.currencies as unknown as Currency)[0]?.name,
                languages: Object.values(countrySelected?.languages as Ilanguages)[0]
            });
        }
    }, [countrySelected]);

    return (
        <div className={styles.container}>
            <div className={styles.contentShapes}>
                <div>
                    <h3>Nome</h3>
                    <p>{infosCountry.name}</p>
                </div>
                <div>
                    <h3>Capital</h3>
                    <p>{infosCountry.capital}</p>
                </div>
                <div>
                    <h3>Área</h3>
                    <p>{infosCountry.area} Km²</p>
                </div>
                <div>
                    <h3>População</h3>
                    <p>{infosCountry.population}</p>
                </div>
                <div>
                    <h3>Região</h3>
                    <p>{infosCountry.region}</p>
                </div>
                <div>
                    <h3>Moeda Corrente</h3>
                    <p>{infosCountry.currencies}</p>
                </div>
                <div>
                    <h3>Idioma</h3>
                    <p>{infosCountry.languages}</p>
                </div>
            </div>
        </div>
    )
}