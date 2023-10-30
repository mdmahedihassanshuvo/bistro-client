import React from 'react';
import Cover from '../../../../Shared/Components/Cover/Cover';
import TableItem from '../../../../Shared/Components/Item/TableItem';

const Salad = ({img, salad, title}) => {
    return (
        <div className='md:my-10'>
            <Cover img={img} title={title} />
            <TableItem items={salad} />
        </div>
    );
};

export default Salad;