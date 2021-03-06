import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logotype } from '../Logotype';
import { Link, withRouter } from 'react-router-dom'; 
import './styles/admin-header.scss';

class AdminHeader extends Component {
    constructor(props) {
        super(props)
        this.onLogout = this.onLogout.bind(this);
        this.onGetStyle = this.onGetStyle.bind(this);
    }

    onGetStyle() {
        const { user } = this.props.info;
        return{
            background: `url(${user.photoURL})`,
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justfycontente: 'center',
            backgroundPosition: 'center',
            width:'60px',
            height:'60px',
            position: 'absolute',
            marginLeft:'20px',
            marginTop: '10px',
            borderRadius: '50%'  
        };
    }

    onLogout() {
        this.props.doLogout();
    }

    render() {
        const { user } = this.props.info;
        return (
            <header className="admin-header">
                <nav aria-label="navigation admin header">
                    <div>
                        <Logotype/>
                        <div className="admin-header__logout-container">
                            <p className="admin-header__name">{user.displayName}</p>
                            <p className="admin-header__logout"><Link to='/' onClick={this.onLogout}>Logout</Link></p> 
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <div style={this.onGetStyle()} />
                                <a href="#">Profile</a>
                            </div>
                        </li>
                        <li className="admin-header__offer"><a href="#">Offer</a></li>
                        <li className="admin-header__community"><a href="#">Community</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(AdminHeader);

AdminHeader.propTypes = {
    doLogout: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired

}