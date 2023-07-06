import './index.scss'

const array = [
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
    '/img/card1.jpg',
];
const Memory = () => {
    return (
        <div className="wrapper">
            {array.map(item => <div><img src={item} alt="card1"/></div>)}
        </div>)
}

export default Memory;