import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import styles from './styleSearch.module.scss'
import { useContext } from "react";
import { ContextApi } from "../../../contexts/contextProviders";
import { validation } from "../../../utils/validation";
import { toast } from "react-toastify";

export function InputSearch({
    width = '100%',
    placeholder = 'Pesquisar',
    valueInput = ''
}): JSX.Element {
const { 
  getCountryFilterByName, 
  setCountryFilter,
  countryFilter,
  country,
  setCountrySelected
} = useContext(ContextApi);

  const getCountry = async (name: string) => {
    if (!validation(name)) {
      toast.error('Digite um nome válido');
    } else {
      await getCountryFilterByName(name);
    }
  }

  return (
    <div className={styles.containerAll}>
      <div 
        className={styles.container}
        style={{width}}
      >
        <input 
          type="text"
          placeholder={placeholder} 
          value={countryFilter}
          onChange={(e) => {
            setCountryFilter(e.target.value);
          }}
          onKeyUp={() => {
            if (countryFilter.length > 2) {
              getCountry(countryFilter);
            }
          }}
        />
        <IoSearch />
      </div>
      {countryFilter && (country.length > 0) && 
      <div 
        className={styles.contentOptions}
        style={{width}}
      >
        {
          country.map((item: any) => {
            return (
              <div 
                className={styles.lineOptions}
                onClick={() => {
                  setCountrySelected(item);
                  setCountryFilter('');
                }}  
                key={item.name.common}
              >
                <p>{item.name.common}</p>
                <IoIosArrowForward />
              </div>
            )
          })
        }
      </div>}
    </div>
  );
}