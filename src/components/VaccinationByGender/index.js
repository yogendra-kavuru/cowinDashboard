import './index.css'
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props

  // Function to assign colors based on gender
  const getGenderColor = gender => {
    if (gender === 'Male') {
      return '#FF1493'
    } else if (gender === 'Female') {
      return '#6495ED'
    } else {
      return '#48D1CC' // Others
    }
  }

  // Assign colors to gender data
  const genderData = data.map(item => ({
    ...item,
    color: getGenderColor(item.gender),
  }))

  return (
    <div className="card-container">
      <h2 className="card-heading">Vaccination by gender</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={genderData}
            cx="50%"
            cy="85%" // Moves the pie chart slightly up
            startAngle={180}
            endAngle={0}
            innerRadius={120} // Adjust inner radius for spacing
            outerRadius={200} // Increase outer radius for better proportions
            dataKey="count"
            nameKey="gender"
          >
            {genderData.map(entry => (
              <Cell key={entry.gender} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            wrapperStyle={{
              marginTop: 20, // Adds space between pie and labels
              textAlign: 'center',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
