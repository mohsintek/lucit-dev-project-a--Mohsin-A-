import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BillBoard from '../BillBoard';

const Wrapper = () => {
    const [state, setState] = useState();

    useEffect(() => {
        ApiResponse();
        setInterval(() => {
            ApiResponse();
        }, 30000);
    }, []);

    const ApiResponse = async () => {
        try {
            const ApiData = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_API_token}`)
            if (ApiData.status === 200) {
                setState(ApiData.data.pingbacks)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {
                Array.isArray(state) && state.length > 0 && state.map(item =>
                    <BillBoard
                        key={item?.id}
                        BillboardimageUrl={item?.inventory_photo?.options?.public_url}
                        locationName={item?.digital_board?.location.name}
                        playDatetime={item?.play_datetime}
                        operator={item?.digital_board?.agency.name}
                    />
                )

            }
        </div>
    );
}

export default Wrapper;

