import { connect } from 'react-redux';
import Header from './Header';
import { fetchProperties } from '../../../actions';

const mapDispatchToProps = {
    fetchProperties
}

export default connect (null, mapDispatchToProps)(Header);