import { useState, useEffect, useCallback } from "react";
import API from "../utils/API";

const ascending = (a, b) => {
  return a.name.first > b.name.first ? 1 : -1;
};

const descending = (a, b) => {
  return b.name.first > a.name.first ? 1 : -1;
};

const useHomepageHooks = () => {
  const [userList, setUserList] = useState([]);
  const [filteredUserlist, setfilteredUserlist] = useState(userList);
  const [name, setName] = useState("");
  const [isSortascending, setisSortascending] = useState(true);

  useEffect(() => {
    API.getFullList()
      .then((res) => {
        setUserList(res.data.results);
        setfilteredUserlist(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const newfilteredUserlist = userList.filter((user) => {
        if (user.name.first.includes(name) || user.name.last.includes(name)) {
          return user;
        }
      });
      console.log(newfilteredUserlist);
      setfilteredUserlist(newfilteredUserlist);
    },
    [userList, setfilteredUserlist]
  );

  const onChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    const newfilteredUserlist = userList.filter((user) => {
      if (user.name.first.includes(name) || user.name.last.includes(name)) {
        return user;
      }
    });
    console.log(newfilteredUserlist);
    setfilteredUserlist(newfilteredUserlist);
  };

  const handleSort = () => {
    let newfilteredUserlist = [...filteredUserlist].sort(
      isSortascending ? ascending : descending
    );

    console.log(newfilteredUserlist);
    setisSortascending(!isSortascending);

    setfilteredUserlist(newfilteredUserlist);
  };
  return {
    name,
    setName,
    handleFormSubmit,
    handleSort,
    userList,
    filteredUserlist,
    onChange
  };
};

export default useHomepageHooks;
