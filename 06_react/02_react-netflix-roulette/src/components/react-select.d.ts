declare module 'react-select/dist/declarations/src/Select' {
    export interface Props<
        Option,
        IsMulti extends boolean,
        Group extends GroupBase<Option>
    > {
        isSelected: boolean;
        label: string
    }
}
