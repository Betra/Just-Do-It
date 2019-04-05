import { Dispatch } from "redux";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../../actions";

import { InterfaceLink } from "../InterfaceLink";

interface StoreProps {
  active: boolean;
}

interface DispatchProps {
  // Some Later
  onClick?: () => any;
}

const mapStateToProps = (state, ownProps): StoreProps => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps): DispatchProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceLink);
