import s from "../../Users/Users.module.css";
import {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChenged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setportionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {
            setportionNumber(portionNumber - 1)
        }}>Back</button>}
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(c => <span className={currentPage === c && s.selectedPage} onClick={() => {
                onPageChenged(c)
            }}>{c}</span>)}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setportionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>
}
export default Paginator