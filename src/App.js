import React, { useState } from 'react'
import Select from 'react-select'
import { withTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import './App.scss'
import { options } from './config/options'

const App = props => {
  const [value, setValue] = React.useState(0)
  const [lang, setLang] = useState(options[0])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let changeLang = lang => {
    setLang(lang)
    props.i18n.changeLanguage(lang.value)
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
          <Tab label={props.t('How it works')} />
          <Tab label={props.t('About us')} />
          <Tab label={props.t('Events')} />
          <Tab label={props.t('Contacts')} />
        </Tabs>
      </Paper>
      <div className="wrapper-handling">
        <Button>{props.t('Sign in')}</Button>
        <Button variant="contained" color="secondary">
          {props.t('Sign up')}
        </Button>
        <Select
          defaultValue={options[0]}
          options={options}
          value={lang}
          onChange={changeLang}
          className="language-list"
        />
      </div>
    </div>
  )
}

export default withTranslation()(App)
