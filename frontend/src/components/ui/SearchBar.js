import classes from "../pages/Front.module.css";
import React, {useState} from "react";
import SearchInput from "../pages/SearchInput";

export default function SearchBar() {
    const [isClicked, setIsClicked] = useState(false);

    function showSearch() {
        setIsClicked(!isClicked)

    }

    return (
        <div>
            <div className={classes.search_bar}>
                <div className="d-flex justify-content-around">
                    <div className={'col text-center ' + classes.search_bar_item} onClick={showSearch}>

                        <strong className={'ms-2'}><small>Location</small></strong><br/>
                        <small className={'text-muted ms-2'}>Which country?</small>

                    </div>
                    <div className={'text-center d-none d-sm-block col ' + classes.search_bar_item}>
                        <strong><small>Check in</small></strong><br/>
                        <small className={'text-muted'}>Add dates</small>
                    </div>
                    <div className={'text-center d-none d-sm-block col ' + classes.search_bar_item}>
                        <strong><small>Check out</small></strong><br/>
                        <small className={'text-muted'}>Add dates</small>
                    </div>
                    <div className={'text-center d-none d-sm-block col ' + classes.search_bar_item}>
                        <strong><small>Guests</small></strong><br/>
                        <small className={'text-muted'}>Add guests</small>
                    </div>
                    <div className={'text-center col ' + classes.search_bar_item}>
                        <div className={'ms-auto  me-2 ' + classes.search_btn}>
                            <>&#128270;</>
                        </div>
                    </div>
                </div>

            </div>
            {isClicked && <SearchInput/>}
        </div>


    );
}