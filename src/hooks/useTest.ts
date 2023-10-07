// type QueryFunction<R = (...args: any[]) => Promise<Result>

interface UseCustomQueryResult {
  x: boolean
  y: boolean
}

type UseCustomQuery = [() => void, UseCustomQueryResult]

function useTest (): UseCustomQuery {
  function test (): void {
    alert('kdjlf')
  }
  const x = true
  const y = false

  return [test, { x, y }]
}

export default useTest
