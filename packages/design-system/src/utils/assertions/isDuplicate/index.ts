function isDuplicate(data: any, obj: any) {
  return data.some((el: any) =>
    Object.entries(obj).every(([key, value]) => value === el[key]),
  )
}

export { isDuplicate }
