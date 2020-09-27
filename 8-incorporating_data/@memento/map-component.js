// Example of using others components to avoid repetition of similar tasks
function ListMap({ data = [], renderItem, renderEmpty}) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}