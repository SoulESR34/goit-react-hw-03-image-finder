import React from 'react'
import { Button } from './ButtonLoadMore.styled'

export const ButtonLoadMore = ({request}) => {
  return (
    <Button onClick={() => request()}>Load more</Button>
  )
}
