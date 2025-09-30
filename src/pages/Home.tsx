import { useState } from "react"
import ResumeForm from "../components/ResumeForm"
import TemplateSelector from "../components/TemplateSelector"
import Template1 from "../templates/Template1"
import Template2 from "../templates/Template2"
import { generatePDF } from "../utils/pdfUtils"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

// PDF Templates
const PDFTemplate1 = ({ data }: { data: any }) => (
  <Document>
    <Page style={{ padding: 20, fontFamily: "Helvetica" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{data.name}</Text>
      <Text>{data.email} | {data.phone}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Education</Text>
      <Text>{data.education}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Experience</Text>
      <Text>{data.experience}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Skills</Text>
      <Text>{data.skills}</Text>
    </Page>
  </Document>
)

const PDFTemplate2 = ({ data }: { data: any }) => (
  <Document>
    <Page style={{ padding: 20, fontFamily: "Times-Roman" }}>
      <Text style={{ fontSize: 28, color: "#1E40AF", fontWeight: "bold" }}>{data.name}</Text>
      <Text style={{ fontStyle: "italic" }}>{data.email} | {data.phone}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>🎓 Education</Text>
      <Text>{data.education}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>💼 Experience</Text>
      <Text>{data.experience}</Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>🛠 Skills</Text>
      <Text>{data.skills}</Text>
    </Page>
  </Document>
)

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  })

  const [template, setTemplate] = useState("template1")

  const handleDownload = async () => {
    if (template === "template1") {
      await generatePDF(<PDFTemplate1 data={formData} />)
    } else {
      await generatePDF(<PDFTemplate2 data={formData} />)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Resume to PDF Converter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <ResumeForm formData={formData} setFormData={setFormData} />

        {/* Preview + PDF */}
        <div>
          <TemplateSelector template={template} setTemplate={setTemplate} />

          <div className="border p-4 bg-white rounded-lg shadow mt-4 h-[500px] overflow-auto">
            {template === "template1" ? (
              <Template1 data={formData} />
            ) : (
              <Template2 data={formData} />
            )}
          </div>

          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}
