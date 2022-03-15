import React, {useState} from "react";
import s from "./Table.module.css"
import {PackType} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/packsReducer";
import Preloader from "../preloader/Preloader";


type TableType = {
    p: PackType
}
const TableX = ({p}: TableType) => {

    const arr = [{
        Name: p.name,
        Cards: p.cardsCount,
        LastUpd: p.updated,
        CreatedBy: p.user_name,
        Actions: null
    }]

// const arr=useFridaySelector<any[]>(state => state.packs.cardPacks)

    return (
        arr
            ? (
                <div className={s.table}>
                    {arr.map((arr, idx) => <TableRow key={idx} arr={arr}/>)}
                </div>
            ) : (
                <div>
                    <Preloader status={"failed"}/>
                </div>)
    )
};
const TableRow = ({arr}: any) => {

    const {
        Name,
        Cards,
        LastUpd,
        CreatedBy,
        Actions
    } = arr


    return (
        <div className={s.tableRow}>

            <TableCell item={Name}/>
            <TableCell item={Cards}/>
            <TableCell item={LastUpd}/>
            <TableCell item={CreatedBy}/>
            <TableCell status={true} item={Actions}/>

        </div>
    )
};
const TableCell = ({item, status}: any) => {
    const [state, setState] = useState(item);
    return (
        <div className={s.tableCell}>
            {/*<input*/}
            {/*    value={state}*/}
            {/*    onChange={({ target }) => setState(target.value)}*/}
            {/*    type="text" />*/}
            {state}
            {status &&
            <ButtonGroup/>
            }
        </div>
    )
}
export default TableX;

export const ButtonGroup = () => {
    return (
        <div className={s.BtnContainer}>
            <button onClick={() => alert("edit")}>edit</button>
            <button onClick={() => alert("delete")}>delete</button>
            <button onClick={() => alert("learn")}>learn</button>
        </div>
    )
}