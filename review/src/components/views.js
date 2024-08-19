import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

function View() {
    let location = useLocation();
    const [review, setReview] = useState('')
    const [reviewList, setReviewList] = useState([" "])
    // async function getReviews() {
    //     try {
    //         let response = await axios.get('');
    //         setReviewList(response.data.reviews)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
        // getReviews()
    // }, [])


    return (
        <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <h1 style={{ color: 'white', marginBottom: '20px' }}>Reviews</h1>
                <img src={location.state.Poster} alt='Movie Poster' style={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '400px',
                    marginBottom: '20px'
                }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '30px', width: '50%', maxWidth: '600px' }}>
                {location?.state?.Trailer ?
                    <ReactPlayer controls="true" playing={true} url={location.state.Trailer}
                        width='100%' height='100%' /> : <></>
                }
                <h3 style={{ color: 'white', marginBottom: '10px' }}>
                    Type your reviews here:
                </h3>
                <textarea value={review} style={{
                    height: '100px',
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '20px'
                }} onChange={(e) => {
                    if (e.target.value !== '') {
                        setReview(e.target.value);
                    }
                }} />
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#008CBA',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    marginBottom: '20px'
                }} onClick={() => {
                    setReviewList([...reviewList, review]);
                    setReview('');
                }}>
                    Submit
                </button>

                {reviewList.map((review, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        color: 'white',
                        paddingBottom: '10px',
                        borderBottom: '1px solid #555',
                        marginBottom: '10px'
                    }}>
                        <div style={{ flexGrow: 1 }}>
                            {review}
                        </div>
                        {/* <img src={''} alt='Del' style={{
                            height: '20px',
                            width: '20px',
                            cursor: 'pointer'
                        }} /> */}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default View