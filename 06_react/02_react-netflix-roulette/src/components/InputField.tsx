import classes from './InputField.module.scss';

export interface IInputField {
    id: string;
    type: string;
    labelText?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: any;
    isFullWidth?: boolean;
    placeholder?: string;
}
const InputField: React.FC<IInputField> = ({
    id,
    type,
    labelText,
    onChange,
    value,
    isFullWidth
}) => {
    return (
        <div
            className={`
                ${classes['input-field']}
                ${isFullWidth ?
                    classes['input-field--full'] :
                    ''
                }
            `}
        >
            <label htmlFor={id}>{labelText}</label>
            <input
                type={type}
                id={id}
                name={id}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default InputField