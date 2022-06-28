import { createContext } from 'react'

export interface IDescriptionListContext {
    labelPlacement?: 'left' | 'top'
    actionPlacement?: 'right' | 'bottom'
    columns?: 1 | 2
}

export const defaultContext: IDescriptionListContext = {
    labelPlacement: 'left',
    actionPlacement: 'right',
    columns: 1,
}

export default createContext<IDescriptionListContext>(defaultContext)
