import { MDXContentProps } from '@/types/nav'
import React from 'react'
import ReactDOM from 'react-dom'


export const getMDXComponent = (code: string): React.FC<MDXContentProps> => {
const mainPacks = {React, ReactDOM}
  const fn = new Function(...Object.keys(mainPacks), code)
  return fn(...Object.values(Object.values(mainPacks))).default
}

export const useMDXComponent = (code: string) => {
  return React.useMemo(() => getMDXComponent(code), [code])
}



