import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import { SelectionMap } from '../utils'

export default function Browse() {
  const { films } = useContent('films')
  const { series } = useContent('series')
  const slides = SelectionMap({ films, series })

  return <BrowseContainer slides={slides} />
}
