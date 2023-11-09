export function formatNumber (data: any): any {
  if (Number.isNaN(data)) {
    return 0
  } else if (data > 1000) {
    if (data >= 1000000) {
      return (data / 1000000).toFixed(1) + 'M'
    } else {
      return (data / 1000).toFixed(1) + 'k'
    }
  } else {
    return data
  }
}
