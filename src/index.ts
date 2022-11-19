import fastBlobFetch from '@fastblob/fast-fetch'

import { getFastBlobInputs } from './urls'

type FetchParams = Parameters<typeof fastBlobFetch>
type FetchReturn = ReturnType<typeof fastBlobFetch>

async function fetch (input: FetchParams[0], init: FetchParams[1]): FetchReturn {
  const fastblobURLs = getFastBlobInputs(input)
  const newInput = fastblobURLs[0]
  const mirrors = fastblobURLs.slice(1)

  const newInit = init ?? {}

  // @ts-expect-error
  newInit.fastFetch = newInit?.fastFetch ?? {}
  // @ts-expect-error
  newInit.fastFetch.mirrorURLs = [...mirrors, ...newInit.fastFetch.mirrorURLs ?? []]

  return await fastBlobFetch(newInput, newInit)
}

export default fetch
export { getFastBlobInputs }
