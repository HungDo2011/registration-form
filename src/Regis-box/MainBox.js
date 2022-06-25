import './MainBox.scss';
import BodyBox from './BodyBox/BodyBox';
import HeadingBox from './HeadingBox/HeadingBox';

function MainBox() {
    return (
        <div className="main-box">
            <HeadingBox />
            <BodyBox />
        </div>
    );
}

export default MainBox;
