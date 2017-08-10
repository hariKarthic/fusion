import PropTypes from 'prop-types';
import {css} from 'emotion';

const Blockquote = styled.blockquote`
  color: indigo;
  font-size: 20px;
  text-align: ${props => props.align}
`;

/* Props Check */
Blockquote.propTypes = {
  /**
   * Text Align
  */
  align: PropTypes.string
};

/* Deafult Props */
Blockquote.defaultProps = {
  aling: "left"
};

export default Blockquote;
