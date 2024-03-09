import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../contexts/contextProviders';
import { formatNumberWithLocale } from '../../utils/filters';
import { 
    Currency, 
    Ilanguages
} from '../../types/country';

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

export function TableDetails() {
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
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Capital</th>
                    <th>Área</th>
                    <th>População</th>
                    <th>Região</th>
                    <th>Moeda Corrente</th>
                    <th>Idioma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Nome">{infosCountry.name}</td>
                    <td data-label="Capital">{infosCountry.capital}</td>
                    <td data-label="Área">{infosCountry.area} km²</td>
                    <td data-label="População">{infosCountry.population}</td>
                    <td data-label="Região">{infosCountry.region}</td>
                    <td data-label="Moeda Corrente">{infosCountry.currencies}</td>
                    <td data-label="Idioma">{infosCountry.languages}</td>
                </tr>
            </tbody>
        </table>
    )
}