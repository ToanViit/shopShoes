import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '', // State để lưu từ khóa tìm kiếm
            sortBy: '' // State để lưu trạng thái sắp xếp
        };
    }

    // Xử lý thay đổi giá trị của input
    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    // Xử lý khi submit form tìm kiếm
    handleSearchSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn reload trang khi submit (nếu dùng trong form)
        // Đối với ví dụ này, bạn có thể gọi hàm searchProduct(this.state.searchTerm) để xử lý tìm kiếm
        console.log("Searching for:", this.state.searchTerm);
        // Gọi phương thức onSubmit được truyền từ ProductList để xử lý tìm kiếm
        this.props.onSubmit(this.state.searchTerm);
    }

    // Xử lý thay đổi lựa chọn sắp xếp
    handleSortChange = (event) => {
        const sortBy = event.target.value;
        this.setState({ sortBy }, () => {
            // Gọi phương thức onChangeSort được truyền từ ProductList để xử lý sắp xếp
            this.props.onChangeSort(sortBy);
        });
    }

    render() {
        return (
            <div className="searchBar row height d-flex justify-content-center align-items-center">
                <div className="col-md-10">
                    <form className="form searchBar_child" onSubmit={this.handleSearchSubmit}>
                        <input type="text" className="form-control form-input" placeholder="Search product..." value={this.state.searchTerm}
                            onChange={this.handleSearchChange} />

                        <button type="submit">
                            <svg className="icon icon-search" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"
                                width="64" height="64">
                                <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42" stroke="#000000" fill="none" strokeWidth="2px"></path>
                            </svg>
                        </button>

                    </form>
                </div>
                <div className="col-md-1">
                    <div className="form">
                        <label htmlFor="sortSelect">Sort by:</label>
                        <select id="sortSelect" className="form-control" onChange={this.handleSortChange}>
                         
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
