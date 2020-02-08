import React, {useState} from 'react';
import {useGetData} from "use-axios-react";
import './Data.css';

const Data = ({page}) => {
        const showItems = 10;
        const [isBreakPoint, setIsBreakPoint] = useState(false);
        const [data, loading, {error, setData}] = useGetData(`https://jsonplaceholder.typicode.com/${page}`);
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>Error!</p>;
        }
        const handleRemoveItem = index => {
            data.splice(index, 1);
            setData(data);
        };
        data.splice(showItems, data.length - showItems);
        const renderCard = () => {
            switch (page) {
                case 'posts':
                    return data.map((post, index) => {
                        return (
                            <div className='cardBox' key={post.id}>
                                <div className="card">
                                    <span className="close text-right" onClick={() => handleRemoveItem(index)}>X</span>
                                    <h5 className="card-title">ID : {post.id}</h5>

                                    <h6 className="card-subtitle text-muted">{post.title}</h6>
                                    <div className="card-body">

                                    </div>
                                </div>
                            </div>
                        )
                    });
                case 'users':
                    return data.map((user, index) => {
                        return (
                            <div className='cardBox' key={user.id}>
                                <div className="card">
                                    <span className="close text-right" onClick={() => handleRemoveItem(index)}>X</span>
                                    <h5 className="card-title">ID : {user.name} Username : {user.username}</h5>

                                    <h6 className="card-subtitle text-muted">{user.phone}</h6>
                                    <div className="card-body">

                                    </div>
                                </div>
                            </div>
                        )
                    });
                default: return;
            }
        };
        const handlerToggle = () => {
            setIsBreakPoint(!isBreakPoint);
        };
        return (
            <div>
                <button onClick={() => {
                    handlerToggle();
                }}>{isBreakPoint ? 'Wrap' : 'No wrap'}
                </button>
                <div className="p-2 mt-5">
                    <div className={'cardsBox' + (isBreakPoint ? ' isNoWrap' : '')}>
                        {renderCard()}
                    </div>
                </div>
            </div>

        )
    }
;
export default Data;
