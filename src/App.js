import React from 'react'
import './App.scss'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const App = props => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="wrapper">
      <Paper className="wrapper-menu">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="How it works" />
          <Tab label="About us" />
          <Tab label="Events" />
          <Tab label="Contacts" />
        </Tabs>
      </Paper>
      <div className="wrapper-button">
        <Button>Sign in</Button>
        <Button variant="contained" color="secondary">
          Sign up
        </Button>
      </div>
      <select className="language-list">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  )
}

export default translate('common')(App)
