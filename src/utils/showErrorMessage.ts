export const showErrorMessage = (error: any) => {
  const defaultMessage = "잠시 후 다시 시도해주세요."
  const dataMessage = error?.response?.data?.data?.[0]?.message
  const fieldErrorMessage = error?.response?.data?.fieldErrors?.[0]?.message

  alert(dataMessage || fieldErrorMessage || defaultMessage)
}
