import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    lastWeekData: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
    isError: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        lastWeekData: data.last_7_days_vaccination,
        vaccinationByAgeData: data.vaccination_by_age,
        vaccinationByGenderData: data.vaccination_by_gender,
      })
      this.setState({isLoading: false})
    } else {
      this.setState({isError: true})
    }
  }

  renderDashboard = () => {
    const {lastWeekData, vaccinationByGenderData, vaccinationByAgeData} =
      this.state
    return (
      <div>
        <VaccinationCoverage data={lastWeekData} />
        <VaccinationByGender data={vaccinationByGenderData} />
        <VaccinationByAge data={vaccinationByAgeData} />
      </div>
    )
  }

  renderErrorView = () => {
    return (
      <div className="bg-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="header-logo"
          />
          <h1 className="header-heading">CoWIN Vaccination in India</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        <div className="content-container">
          <img
            className="error-img"
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
          <h1 className="error-heading">Something went wrong</h1>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, isError} = this.state
    if (isError) {
      return this.renderErrorView()
    }
    return (
      <div className="bg-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="header-logo"
          />
          <h1 className="header-heading">Co-win</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        <div className="content-container">
          {isLoading ? (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.renderDashboard()
          )}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
