import Select, { components, DropdownIndicatorProps } from 'react-select';
import SelectOption from './SelectOption';
import arrowIcon from '../assets/images/icon-arrow.svg';
import { backgroundColorInput, colorAccent, colorLight, heightInput} from '../ui/CSSVariables';

interface Props {
    options: object[];
    handleChange: (e: any) => void;
}

const CustomSelect: React.FC<Props> = ({options, handleChange}) => {
    const selectOptions = options;
    const DropdownIndicator = (props: DropdownIndicatorProps) => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={arrowIcon} alt='' />
            </components.DropdownIndicator>
        );
    };
    const IndicatorSeparator = () => {
        return null;
    };

    return (
        <Select
            options={selectOptions}
            isMulti
            isClearable={false}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onInputChange={handleChange}
            components={{
                Option: SelectOption,
                DropdownIndicator,
                IndicatorSeparator,
            }}
            styles={{
                multiValue: (base) => ({
                    ...base,
                    border: `none`,
                    backgroundColor: backgroundColorInput,
                    color: colorAccent,
                }),
                multiValueLabel: (base) => ({
                    ...base,
                    border: `none`,
                    backgroundColor: backgroundColorInput,
                    color: colorLight,
                }),
                control: (base) => ({
                    ...base,
                    height: heightInput,
                    border: `none`,
                    backgroundColor: backgroundColorInput,
                    borderRadius: 4,
                    color: 'white',
                }),
                container: (base) => ({
                    ...base,
                    height: heightInput,
                    backgroundColor: 'transparent',
                    padding: 0,
                }),
                singleValue: (base) => ({
                    ...base,
                    color: 'green',
                }),
                valueContainer: (base) => ({
                    ...base,
                    display: 'flex',
                    alignItems: 'center',
                    height: heightInput,
                    background: backgroundColorInput,
                    color: 'purple',
                    borderRadius: '4px',
                    paddingTop: '0',
                }),
                option: (base) => ({
                    ...base,
                    backgroundColor: backgroundColorInput,
                    color: colorLight,
                    display: 'flex',
                    alignItems: 'center',
                    height: '2rem',
                }),
                menu: (base) => ({
                    ...base,
                    backgroundColor: backgroundColorInput,
                }),
                input: (base) => ({
                    ...base,
                    height: heightInput,
                    margin: '0',
                    padding: '0',
                }),
            }}
        />
    );
};

export default CustomSelect