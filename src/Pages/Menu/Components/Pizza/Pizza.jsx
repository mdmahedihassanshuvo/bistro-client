import React from 'react';
import Cover from '../../../../Shared/Components/Cover/Cover';
import TableItem from '../../../../Shared/Components/Item/TableItem';

const Pizza = ({img, pizza, title}) => {

    return (
        <div className='md:my-10'>
            <Cover  img={img} title={title} />
            <TableItem items={pizza} />
        </div>
    );
};

export default Pizza;