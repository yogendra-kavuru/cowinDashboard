import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  return (
    <div className="card-container">
      <h1 className="card-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barSize={50} width={1000} height={300}>
          <XAxis dataKey="vaccine_date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="dose_1" fill="#6495ED" name="Dose 1" />
          <Bar dataKey="dose_2" fill="#FF1493" name="Dose 2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
