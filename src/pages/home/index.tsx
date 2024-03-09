import { useContext, useEffect, useState } from "react";
import { FaTable } from "react-icons/fa";
import { PiCardsBold } from "react-icons/pi";

import { InputSearch } from "../../components/inputs/inputSearch/inputSearch";
import { SectionNavigator } from "../../components/SectionNavigator/indext";
import { ShapesDetails } from "../../components/shapesDetails";
import { TableDetails } from "../../components/tableDetails";
import { ContextApi } from "../../contexts/contextProviders";

import styles from './styles.module.scss'

export function Home() {
  const {
    countrySelected,
    getCountryHistory,
  } = useContext(ContextApi);
  const [preview, setPreview] = useState('table' as 'table' | 'cards' | '');
  
  useEffect(() => {
    setTimeout(() => {
      getCountryHistory();     
    }, 1000);
  }, [countrySelected]);

  return (
    <div className={styles.containerHome}>
        <header className={styles.header}>
            <InputSearch 
                width="70%"
                placeholder="Digite o nome do país"
            />
        </header>
        <SectionNavigator />
        {countrySelected && 
        <div className={styles.boxDetails}>
          <div className={styles.contentHeaderDetails}>
            <h1>Detalhes do pais</h1>
            <div className={styles.boxPreview}>
              <h1>Visualização</h1>
              <div className={styles.contentShapes}>
                <div
                  style={
                    preview === 'table' ? 
                    {
                      backgroundColor: 'var(--black-600)',
                      color: '#F2F2F2'
                    } : 
                    {
                    backgroundColor: '#F2F2F2',
                    color: 'var(--black-600)'
                  }}
                  onClick={() => setPreview('table')}
                >
                  <p>Tabela</p>
                  <FaTable />
                </div>
                <div
                  style={
                    preview === 'cards' ? 
                    {
                      backgroundColor: 'var(--black-600)',
                      color: '#F2F2F2'
                    } : 
                    {
                    backgroundColor: '#F2F2F2',
                    color: 'var(--black-600)'
                  }}
                  onClick={() => setPreview('cards')}
                >
                  <p>Cartões</p>
                  <PiCardsBold />
                </div>
              </div>
            </div>
          </div>
          {preview === 'table' && <TableDetails />}
          {preview === 'cards' && <ShapesDetails />}
        </div>}
    </div>
  );
}