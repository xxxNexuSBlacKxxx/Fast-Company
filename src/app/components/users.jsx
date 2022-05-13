import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./pagination";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";

const Users = ({ professions, handleDelete, handleToggleBookMark, handleProfessionSelect, handlePageChange, handleSort, count, usersCrop, clearFilter, selectedProf, sortBy, pageSize, currentPage }) => {
    return (
        <div>
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count}/>
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    professions: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToggleBookMark: PropTypes.func,
    handleProfessionSelect: PropTypes.func,
    handlePageChange: PropTypes.func,
    handleSort: PropTypes.func,
    count: PropTypes.number,
    usersCrop: PropTypes.array,
    clearFilter: PropTypes.func,
    selectedProf: PropTypes.string,
    sortBy: PropTypes.object,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
};

export default Users;
