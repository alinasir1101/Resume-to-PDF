import { pdf } from '@react-pdf/renderer'
import type { ReactElement } from 'react'

export async function generatePDF(element: ReactElement<any, any>) {
  // element is passed to pdf() without any cast
  const blob = await pdf(element).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'resume.pdf'
  a.click()
}
