import { connect } from 'react-redux';

import { getData } from './services/actions';

const DataController = ({
  children, data, getData, pending,
}) => children({ data, getData, pending });

const mapDispatchToProps = { getData };
const mapStateToProps = ({ data: { items, pending } }) => ({ pending, data: items });

export default connect(mapStateToProps, mapDispatchToProps)(DataController);
