import { components, OptionProps } from 'react-select';
import classes from './SelectOption.module.scss'

const SelectOption = (props: OptionProps) => {
    return (
        <div className={classes['option']}>
            <components.Option {...props}>
                <input
                    type='checkbox'
                    checked={props.isSelected}
                    onChange={() => null}
                    className={classes['option__input']}
                />
                <label className={classes['option__label']}>{props.label}</label>
            </components.Option>
        </div>
    );
}

export default SelectOption