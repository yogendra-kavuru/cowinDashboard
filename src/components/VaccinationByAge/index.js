import './index.css'
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)

  // Function to assign colors based on age group
  const getAgeColor = age => {
    if (age === '18-44') {
      return '#4682B4'
    } else if (age === '45-60') {
      return '#ADFF2F'
    } else {
      return '#66CDAA' // For age groups beyond 60 or others
    }
  }

  // Assign colors to age data
  const ageData = data.map(item => ({
    ...item,
    color: getAgeColor(item.age),
  }))

  return (
    <div className="card-container">
      <h1 className="card-heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={ageData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="count"
            nameKey="age"
          >
            {ageData.map(entry => (
              <Cell key={entry.age} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            wrapperStyle={{
              marginTop: 20,
              textAlign: 'center',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
