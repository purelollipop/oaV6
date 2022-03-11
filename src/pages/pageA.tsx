import React from 'react';
import {useParams,useSearchParams} from "react-router-dom";
interface props {

}

const PageA: React.FC<props> = (props) => {
    let params = useParams()
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    return (<>
        pageApageApageApageA
        <div>
            {params.Id}
        </div>
    </>);
};

export default PageA
