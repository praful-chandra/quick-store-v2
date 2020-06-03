import React,{useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBolt} from "@fortawesome/free-solid-svg-icons";




export default function HomepageComponentLeft() {

    const [selectedItem,selectedItemHandler] = useState(0);

    const items = ["Best Selling","women","Kids"];



    return (
        <div className="homepage_content-left-wrapper">
            <ul>
                <li className={selectedItem === 0 ?"homepage_content-left-selected": "" } onClick={()=>selectedItemHandler(0)}>New <FontAwesomeIcon icon={faBolt} /></li>
                {
                    items.map((i,index)=><li className={selectedItem === index+1 ?"homepage_content-left-selected": "" } onClick={()=>selectedItemHandler(index+1)}> {i}</li>)
                }
            </ul>
        </div>
    )
}
