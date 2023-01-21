// Component to display all 26 alphabets one by one. This is being called from the Body compoment.

const Alphabet = ({ alphabet, evaluateResponse }) => {

    return <div >
        <div className='icon'>
            <button className="button" id={alphabet} name='icon-button' onClick={() => evaluateResponse(alphabet)}>{alphabet}</button>
        </div>
    </div>;
};

export default Alphabet;
