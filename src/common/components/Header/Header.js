import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Input } from '../Input';
import { Menu } from '../Menu';
import { Logotype } from '../Logotype';
import { withRouter } from 'react-router-dom';
import './styles/header.scss';
import './styles/main.scss';

const TO_SEARCH = '/search';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(data){
        this.setState({search: data.target.value});
    }

    onClick(){
        const { search } = this.state;
        const { fetchProperties, history } = this.props;
        fetchProperties(search)
          .then(() => {
              //redicionar apenas quando estiver em páginas diferentes de search
              if (history.location.pathname !== TO_SEARCH){
                  history.push(TO_SEARCH)
              }
          });
    }

    render(){
        const { search } = this.state;

        return(
            <header className="header">
                <nav aria-label="navigation-main">
                    <Logotype />
                    <Menu />
                </nav>
                <section className="main__search">
                    <h1>Where do you want to go today?</h1>
                    <div className="main__container">
                        <Input
                           ariaLabel='search'
                           id='search'
                           name='search'
                           onChange={this.onChange}
                           value={search}
                        /> 
                        <Button 
                           alt='search'
                           className='button__search'
                           onClick={this.onClick}
                        />
                    </div>
                </section>
            </header>
        )
    }
}

export default withRouter(Header);

Header.propTypes = {
    fetchProperties: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}