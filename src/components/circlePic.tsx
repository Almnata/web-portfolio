import yoNY from '../assets/yoNY.jpg';

export function CirclePic() {
    return (
        <div>
            <h1>Circle Picture</h1>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={yoNY} alt="yoNY" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    );
}
