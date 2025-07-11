import carImg from '../../assets/car.svg'
import Button from '../Button';
import './styles.css';

export default function Card() {
    return (
        <>
            <div className="ct-card">
                <img src={carImg} alt="Carro" />
                <h3>Audi Supra TT</h3>
                <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i></p>
                <Button />
            </div>
        </>
    );
}