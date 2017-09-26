import React from 'react'
import PropTypes from 'prop-types'
import PackageCard from './PackageCard'

const PackageSearch = ({ onSearch, searchTerm }) => {
  searchTerm = '';

    return (
      <div className="col-md-2 col-s-2 ">
            <form className ="search-form has-feedback"
              onChange={e => {
                e.preventDefault()
                onSearch(searchTerm.value)
              }}
              >
              <i className="form-control-feedback glyphicon glyphicon-search"/>
              <input className="form-control" placeholder="Search" type="text"
                ref={node => {
                  searchTerm = node
                }}
              />

            </form>
      </div>
    )
};
PackageSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default PackageSearch
