import React from 'react';

export default props => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in ornare felis. Donec congue
                        urna nunc, eu facilisis lectus efficitur nec. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Nunc bibendum consectetur faucibus. Ut quam libero,
                        lacinia nec posuere nec, vulputate vitae enim. Donec sit amet accumsan metus. Vivamus fringilla
                        condimentum aliquet. Vestibulum tempus mauris lacinia nunc hendrerit feugiat. Ut bibendum
                        posuere scelerisque. Pellentesque lobortis nulla eu mi varius tincidunt. Fusce vitae ex
                        condimentum nibh commodo posuere in sit amet tellus.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Michael</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
};
