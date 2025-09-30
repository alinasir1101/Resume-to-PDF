type TemplateProps = {
    data: any
}

// Preview Template in Home Page
export function Template1({ data }: TemplateProps) {
    return (
      <div className="font-sans">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>{data.email} | {data.phone}</p>
        <h3 className="mt-4 font-semibold">Education</h3>
        <p>{data.education}</p>
        <h3 className="mt-4 font-semibold">Experience</h3>
        <p>{data.experience}</p>
        <h3 className="mt-4 font-semibold">Skills</h3>
        <p>{data.skills}</p>
      </div>
    )
}
  
export function Template2({ data }: TemplateProps) {
  return (
    <div className="font-serif border-l-4 border-blue-600 pl-4">
      <h2 className="text-3xl font-bold text-blue-600">{data.name}</h2>
      <p className="italic">{data.email} | {data.phone}</p>
      <section className="mt-4">
        <h3 className="text-lg font-semibold">🎓 Education</h3>
        <p>{data.education}</p>
      </section>
      <section className="mt-4">
        <h3 className="text-lg font-semibold">💼 Experience</h3>
        <p>{data.experience}</p>
      </section>
      <section className="mt-4">
        <h3 className="text-lg font-semibold">🛠 Skills</h3>
        <p>{data.skills}</p>
      </section>
    </div>
  )
}






// Preview Template in Home Page
export function Template3({ data }: { data: any }) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl font-sans text-gray-800">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-600">{data.email} | {data.phone}</p>
        {data.linkedin && <p className="text-blue-600">{data.linkedin}</p>}
      </div>

      {/* Profile */}
      {data.profile && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">Profile</h2>
          <p className="mt-2 text-gray-700">{data.profile}</p>
        </div>
      )}

      {/* Education */}
      {data.education && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
          {data.education.map((edu: any, idx: number) => (
            <div key={idx} className="mt-2">
              <p className="font-semibold">{edu.degree} - {edu.institution}</p>
              <p className="text-gray-600">{edu.year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {data.experience && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">Experience</h2>
          {data.experience.map((exp: any, idx: number) => (
            <div key={idx} className="mt-2">
              <p className="font-semibold">{exp.role} - {exp.company}</p>
              <p className="text-gray-600">{exp.duration}</p>
              <p className="mt-1">{exp.details}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">Skills</h2>
          <p className="mt-2">{data.skills.join(", ")}</p>
        </div>
      )}

      {/* Projects */}
      {data.projects && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">Projects</h2>
          {data.projects.map((proj: any, idx: number) => (
            <div key={idx} className="mt-2">
              <p className="font-semibold">{proj.name}</p>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
