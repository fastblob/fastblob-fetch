type FetchInput = Parameters<typeof fetch>[0]

export function getFastBlobInputs (
  input: FetchInput,
  count: number = 10
): FetchInput[] {
  const indexes = Array.from({ length: count }, (_, i) => i)
  return indexes.map((index) => getFastBlobInput(input, index))
}

function getFastBlobInput (input: FetchInput, index: number): FetchInput {
  if (typeof input === 'string') {
    const url = new URL(input)
    url.hostname = `${index}.${url.hostname}`
    return url.toString()
  } else if (input instanceof Request) {
    const url = new URL(input.url)
    url.hostname = `${index}.${url.hostname}`
    return new Request(url.toString(), input)
  } else {
    input.hostname = `${index}.${input.hostname}`
    return input
  }
}
