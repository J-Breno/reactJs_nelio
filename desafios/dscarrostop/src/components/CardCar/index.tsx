import carImg from '../../assets/car.svg'
import './styles.css';

export default function CardCar() {
    return(
        <>
            <div>
                <img src={carImg} alt="Carro" />
                <p>Lorem ipsum dolor</p>
            </div>
        </>
    );
}