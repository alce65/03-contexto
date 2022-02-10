export function Gentleman({ data, handleDelete, handleSelect }) {
    const template = (
        <li className={`gentleman ${data.selected ? 'selected' : ''}`}>
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={data.picture}
                    alt={data.alternativeText}
                />
                <span className="gentleman__initial">{data.initial}</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{data.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {data.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        <span>{data.status}</span>
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        <span>{data.twitter}</span>
                    </li>
                </ul>
            </div>
            <i
                role="button"
                tabIndex="-1"
                aria-hidden="true"
                className="icon gentleman__icon fas fa-check"
                onClick={() => handleSelect(data.id)}
            />
            <i
                role="button"
                tabIndex="-2"
                aria-hidden="true"
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                onClick={() => handleDelete(data.id)}
            />
        </li>
    );
    return template;
}
