import { 
    ReactNode, 
    createContext, 
    useCallback,
    useEffect,
    useState
} from "react";
import { getCountryByName } from "../services/requests/country";
import { toast } from "react-toastify";
import { Country } from "../types/country";

interface ContextType {
    country: Country[];
    setCountryFilter: (filter: string) => void;
    countryFilter: string;
    setCountrySelected: (country: Country) => void;
    countrySelected: Country;
    countryHistory: Country[];
    getCountryFilterByName: (name: string) => void;
    getCountryHistory: () => void;
  }

export const ContextApi = createContext<ContextType>({
    country: [],
    setCountryFilter: () => {},
    countryFilter: '',
    setCountrySelected: () => {},
    countrySelected: {} as Country,
    countryHistory: [],
    getCountryFilterByName: () => {},
    getCountryHistory: () => {},
  });

export function ContextProvider({ children }: { children: ReactNode }) {
    const [country, setCountry] = useState<Country[]>([]);
    const [countryFilter, setCountryFilter] = useState<string>('');
    const [countrySelected, setCountrySelected] = useState<Country>({} as Country);
    const [countryHistory, setCountryHistory] = useState<Country[]>([]);

    // Função para atualizar o país selecionado e o histórico
    const updateCountrySelected = useCallback((newCountrySelected: Country) => {
        // Atualiza o histórico no localStorage
        const history = JSON.parse(localStorage.getItem('countryHistory') || '[]');
        const newHistory = [newCountrySelected, ...history].slice(0, 7); // Mantém apenas os últimos 7 países
        localStorage.setItem('countryHistory', JSON.stringify(newHistory));
        setCountryHistory([]);
    }, []);

    const getCountryHistory = useCallback(() => {
        const history = JSON.parse(localStorage.getItem('countryHistory') || '[]');
        const newHistory = history.slice(0, 7);
        setCountryHistory(newHistory);
    }, []);

    const getCountryFilterByName = useCallback((name: string) => {
        const request = getCountryByName(name);
        toast.promise(request, {
            pending: {
                render() {
                    return "Loading...";
                }
            },
            success: {
                render({ data }: any) {
                    setCountry(data.data);
                    return "Country found!";
                }
            },
            error: {
                render() {
                    return "Country not found!";
                }
            }
        });
    }, [])

    // UseEffect para observar a mudança no countrySelected
    useEffect(() => {
        if (countrySelected && Object.keys(countrySelected).length > 0) {
            updateCountrySelected(countrySelected);
        }
    }, [countrySelected, updateCountrySelected]);

    return (
        <ContextApi.Provider
            value={{
                // Add your context values here
                getCountryFilterByName,
                country,
                setCountryFilter,
                countryFilter,
                setCountrySelected,
                countrySelected,
                countryHistory,
                getCountryHistory
            }}
        >
            {children}
        </ContextApi.Provider>
    )
}