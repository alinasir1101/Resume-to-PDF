
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

// PDF Templates
export const PDFTemplate1 = ({ data }: { data: any }) => (
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
  
export const PDFTemplate2 = ({ data }: { data: any }) => (
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
  




const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica', fontSize: 12, color: '#333' },
    header: { textAlign: 'center', marginBottom: 10 },
    name: { fontSize: 24, fontWeight: 'bold' },
    contact: { fontSize: 12, color: '#555' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 3 },
    subsection: { marginTop: 5 },
    subsectionTitle: { fontWeight: 'bold' },
    subsectionDetail: { color: '#555' },
    text: { marginTop: 2 },
  });
  
  export const PDFTemplate3 = ({ data }: { data: any }) => (
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.contact}>{data.email} | {data.phone}</Text>
          {data.linkedin && <Text style={{ color: '#0a66c2' }}>{data.linkedin}</Text>}
        </View>
  
        {/* Profile */}
        {data.profile && (
          <View>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.text}>{data.profile}</Text>
          </View>
        )}
  
        {/* Education */}
        {data.education && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu: any, idx: number) => (
              <View key={idx} style={styles.subsection}>
                <Text style={styles.subsectionTitle}>{edu.degree} - {edu.institution}</Text>
                <Text style={styles.subsectionDetail}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}
  
        {/* Experience */}
        {data.experience && (
          <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp: any, idx: number) => (
              <View key={idx} style={styles.subsection}>
                <Text style={styles.subsectionTitle}>{exp.role} - {exp.company}</Text>
                <Text style={styles.subsectionDetail}>{exp.duration}</Text>
                <Text style={styles.text}>{exp.details}</Text>
              </View>
            ))}
          </View>
        )}
  
        {/* Skills */}
        {data.skills && (
          <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.text}>{data.skills.join(", ")}</Text>
          </View>
        )}
  
        {/* Projects */}
        {data.projects && (
          <View>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj: any, idx: number) => (
              <View key={idx} style={styles.subsection}>
                <Text style={styles.subsectionTitle}>{proj.name}</Text>
                <Text style={styles.subsectionDetail}>{proj.description}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  )