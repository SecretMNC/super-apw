import react from 'react';
import { Route, Switch } from 'react-router-dom';
import api from './components/parent/api';

export default (
    <div>
        <Switch>
            <Route exact path='/#' component={api} />   
            <Route path='/about' component={about} />
        </Switch>
    </div>
)