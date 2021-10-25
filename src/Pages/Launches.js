
import { React, useEffect, useState } from "react";
import PostService from "../API/PostService";
import Launch from "../Components/Launch/Launch";
import Loader from "../Components/UI/Loader/Loader";
import PaginationButton from "../Components/UI/PaginationButton/PaginationButton";
import { useFetching } from "../Hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pagination";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    let pagesArray = getPagesArray(totalPages);

    const [fetchLaunches, isLaunchesLoading, launchesError] = useFetching(async () => {
        const response = await PostService.getAll(limit,offset);
        setLaunches(response.data.results);
        const totalCount = response.data.count;
        setTotalPages(getPageCount(totalCount,limit));
    });
    
    
    console.log(pagesArray);
    useEffect(() => {
        fetchLaunches();
    }, []);


    return (
        <div>
            <h1>Launches</h1>
            {launchesError &&
                <h3>Oops! Error occurred!</h3>
            }
            {isLaunchesLoading
                ? <Loader />
                : launches.map((launch) => <Launch key={launch.id} launch={launch} />)
            }
            {pagesArray.map(l => 
                <PaginationButton>{l}</PaginationButton>
            )} 
        </div>
    );
}

export default Launches;