import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const products = useSelector(state => state.productList.products)
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    const handleOnKeyUp = (e) => {
        products.filter((item) => {
            if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                if (document.getElementById(item.id)) {
                    document.getElementById(item.id).style.display = "block"
                }
            } else {
                if (document.getElementById(item.id)) {
                    document.getElementById(item.id).style.display = "none"
                }
            }
            return item.title.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    return (
        <div style={{ width: "100%" }}>
            <div className=" ">
                <div className="input-group">
                    <input placeholder='Search products...' value={searchValue} onKeyUp={handleOnKeyUp} onChange={handleSearchChange} className="form-control border-end-0 border rounded-pill" type="text" id="example-search-input" />
                    <span className="input-group-append">
                        <button style={{ marginLeft: "-40px" }} className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill " type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default SearchBox;
