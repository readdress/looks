import React, { Children, cloneElement } from 'react'
import Grid, { GridProps } from '@mui/material/Grid'
import DescriptionListContext, { defaultContext } from './context'
import { DescriptionProps } from './decsription'

export { default as Description, DescriptionProps } from './decsription'

export interface DescriptionListProps extends GridProps {
    labelPlacement?: 'left' | 'top'
    actionPlacement?: 'right' | 'bottom'
    bordered?: boolean
    columns?: 1 | 2
}

const DescriptionList: React.FC<DescriptionListProps> = props => {
    const {
        labelPlacement,
        actionPlacement,
        bordered,
        columns,
        children,
        ...otherProps
    } = props

    const noOfChildren = Children.count(children)
    const borderChildren = (child: React.ReactNode, index: number) => {
        if ((index + 1) < noOfChildren) {
            return cloneElement(child as React.ReactElement<DescriptionProps>, {
                bordered,
                ...(child  as React.ReactElement<DescriptionProps>).props
            })
        }

        return child
    }

    return (
        <DescriptionListContext.Provider
            value={{
                ...defaultContext,
                labelPlacement,
                actionPlacement,
                columns
            }}
        >
            <Grid { ...otherProps } width='100%' container>
                { bordered ? Children.map(children, borderChildren) : children }
            </Grid>
        </DescriptionListContext.Provider>
    )
}

export default DescriptionList
