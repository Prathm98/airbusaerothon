import React from 'react'
import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProgressSpinner } from 'primereact/progressspinner'
import PageNotFound from './components/PageNotFound'
import HomePage from './pages/HomePage'

class Router extends React.Component {
  render() {
    return (
      <Suspense fallback={<ProgressSpinner />}>
        <Switch>
          <Route path='/' exact render={() => <HomePage />} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    )
  }
}

export default Router
