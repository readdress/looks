import React from 'react'
import createCache from '@emotion/cache'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { useEffect, ReactNode } from 'react'
import { Direction } from '@mui/material'
import { CacheProvider } from '@emotion/react'

interface DirectionComponentProps {
  children: ReactNode
  direction?: Direction
}

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [stylisRTLPlugin]
  })

const DirectionComponent = (props: DirectionComponentProps) => {
  const { children, direction = 'ltr' } = props

  useEffect(() => {
    document.dir = direction
  }, [direction])

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>
  }

  return <>{children}</>
}

export default DirectionComponent
