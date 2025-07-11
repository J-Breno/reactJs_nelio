import CardCar from '../../components/CardCar';
import CardComments from '../../components/CardComments';
import Header from '../../components/Header';
import './styles.css';

export default function Catalog() {
    return(
        <>
        <Header />
        <main>
            <section className='cardCar'>
                <h2>Venha nos visitar</h2>
                <CardCar />
                <CardCar />
            </section>
            <section>
                <h2>O que estão dizendo</h2>
                <CardComments />
                <CardComments />
                <CardComments />
                <CardComments />
                <CardComments />
            </section>
        </main>

        </>
    );
}