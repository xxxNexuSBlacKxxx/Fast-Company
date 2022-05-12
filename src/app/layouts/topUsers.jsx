import React, { useEffect, useState } from "react";
import Users from "../components/users";
import UsersPage from "../components/usersPage";
import api from "../api";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import { useParams } from "react-router-dom";

const TopUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 8;
    const paramsId = useParams();
    const { userId } = paramsId;
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        const newArray = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(newArray);
        console.log(id);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            )
            : users;

        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };
        return (
            <>
                {userId
                    ? <UsersPage userId={userId}/>
                    : <Users
                        professions={professions}
                        handleDelete={handleDelete}
                        handleToggleBookMark={handleToggleBookMark}
                        handleProfessionSelect={handleProfessionSelect}
                        handlePageChange={handlePageChange}
                        handleSort={handleSort}
                        count={count}
                        usersCrop={usersCrop}
                        clearFilter={clearFilter}
                        selectedProf={selectedProf}
                        sortBy={sortBy}
                        pageSize={pageSize}
                        currentPage={currentPage}
                    />
                }
            </>
        );
    }
    return "loading...";
};

export default TopUsers;
