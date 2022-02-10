import './gentlist.css';
import { useEffect, useState } from 'react';
import { Gentleman } from './Gentelman';
import { getData } from './models/gent.data';

export default function GentList() {
    const [gentState, setGentState] = useState([]);
    const [countState, setCountState] = useState(0);

    useEffect(() => {
        console.log('Cargando el componente');
        getData().then((data) => {
            setGentState(data);
            setCountState(data.filter((item) => item.selected).length);
        });
    }, []);

    useEffect(() => {
        setCountState(gentState.filter((item) => item.selected).length);
    }, [gentState]);

    const selectGent = (id) => {
        console.log('Selected', id);
        setGentState((prev) =>
            prev.map((item) => ({
                ...item,
                selected: +item.id === +id ? !item.selected : item.selected,
            }))
        );
    };

    const deleteGent = (id) => {
        setGentState((prev) => prev.filter((item) => item.id !== id));
    };

    const listItems = gentState.map((item) => (
        <Gentleman
            key={item.id}
            data={item}
            handleDelete={deleteGent}
            handleSelect={selectGent}
        />
    ));
    const template = (
        <div className="gent-container">
            <header className="gent-main-header">
                <h1 className="gent-main-title">The pointing gentlemen</h1>
            </header>
            <section className="controls">
                <p className="info">
                    <span>{countState}</span>
                    <span> </span>
                    <span>gentlemen pointing at you</span>
                </p>
                <button type="button" className="button button--select">
                    Select all
                </button>
            </section>
            <main className="gent-main">
                <ul>{listItems}</ul>
            </main>
        </div>
    );
    return template;
}
